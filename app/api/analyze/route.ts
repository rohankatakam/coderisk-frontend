import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'
import { createClient } from '@supabase/supabase-js'

// Secret for verifying CLI tokens - must match cli-auth route
const CLI_TOKEN_SECRET = new TextEncoder().encode(
  process.env.CLI_TOKEN_SECRET || 'crisk-cli-token-secret-change-in-production'
)

// API keys from environment (store these in Vercel env vars for production)
const RELACE_API_KEY = process.env.RELACE_API_KEY
const GEMINI_API_KEY = process.env.GEMINI_API_KEY

// Supabase for repo cache
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY!

const RELACE_API_BASE = 'https://api.relace.run/v1'

interface CodebaseFile {
  filename: string
  content: string
}

interface RankedFile {
  filename: string
  score: number
  content?: string
}

interface RepoCache {
  relace_repo_id: string
  last_indexed_hash: string | null
}

async function verifyCliToken(token: string): Promise<string | null> {
  try {
    const { payload } = await jwtVerify(token, CLI_TOKEN_SECRET)
    if (payload.type !== 'cli') {
      return null
    }
    return payload.userId as string
  } catch {
    return null
  }
}

function normalizeGitRemote(remoteUrl: string): string {
  // Normalize git remote URL to a consistent format
  // e.g., "git@github.com:user/repo.git" -> "github.com/user/repo"
  // e.g., "https://github.com/user/repo.git" -> "github.com/user/repo"
  let normalized = remoteUrl
    .replace(/^(https?:\/\/|git@)/, '')  // Remove protocol
    .replace(/\.git$/, '')                // Remove .git suffix
    .replace(':', '/')                    // git@ format uses : instead of /
    .replace(/\/+/g, '/')                 // Normalize multiple slashes
    .toLowerCase()
  return normalized
}

async function getOrCreateRepo(
  gitRemoteUrl: string,
  codebase: CodebaseFile[],
  currentHash: string | null,
  userId: string
): Promise<{ repoId: string; isNew: boolean }> {
  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY)
  const normalizedRemote = normalizeGitRemote(gitRemoteUrl)

  // Check cache first
  const { data: cached } = await supabase
    .from('repo_cache')
    .select('relace_repo_id, last_indexed_hash')
    .eq('git_remote_normalized', normalizedRemote)
    .single()

  if (cached) {
    // Repo exists in cache - check if we need to update
    // For now, we'll just use the cached repo (future: sync if hash changed)
    console.log(`Using cached repo: ${cached.relace_repo_id}`)
    return { repoId: cached.relace_repo_id, isNew: false }
  }

  // Create new repo in Relace
  console.log(`Creating new Relace repo for: ${normalizedRemote}`)

  const createResponse = await fetch(`${RELACE_API_BASE}/repo`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RELACE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      source: {
        type: 'files',
        files: codebase,
      },
      metadata: {
        git_remote: gitRemoteUrl,
        name: normalizedRemote.split('/').pop() || 'unknown',
      },
      auto_index: true, // Enable semantic retrieval
    }),
  })

  if (!createResponse.ok) {
    const errorText = await createResponse.text()
    console.error('Relace create repo error:', createResponse.status, errorText)
    throw new Error(`Failed to create Relace repo: ${createResponse.status}`)
  }

  const { repo_id, repo_head } = await createResponse.json()

  // Cache the repo ID
  await supabase.from('repo_cache').insert({
    git_remote_normalized: normalizedRemote,
    git_remote_url: gitRemoteUrl,
    relace_repo_id: repo_id,
    last_indexed_hash: repo_head || currentHash,
    created_by_clerk_id: userId,
  })

  console.log(`Created and cached new repo: ${repo_id}`)
  return { repoId: repo_id, isNew: true }
}

async function retrieveFromRepo(
  repoId: string,
  query: string,
  stagedFiles: string[]
): Promise<RankedFile[]> {
  const response = await fetch(`${RELACE_API_BASE}/repo/${repoId}/retrieve`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RELACE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      score_threshold: 0.3,
      token_limit: 50000,
      include_content: false,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error('Relace retrieve error:', response.status, errorText)
    throw new Error(`Relace retrieve error: ${response.status}`)
  }

  const data = await response.json()
  const results: RankedFile[] = data.results || []

  // Check if embeddings are still processing
  if (data.pending_embeddings > 0) {
    console.log(`Note: ${data.pending_embeddings} embeddings still processing`)
  }

  // Filter out staged files
  return results
    .filter((r: RankedFile) => !stagedFiles.includes(r.filename))
    .slice(0, 10)
}

// Fallback to direct ranking (no caching) - used when no git remote provided
async function rankRelatedFilesDirect(
  diff: string,
  codebase: CodebaseFile[],
  stagedFiles: string[]
): Promise<RankedFile[]> {
  const query = `Find files that are semantically related to these code changes and might be impacted:

${diff}

What other files in this codebase might need to be updated, reviewed, or could be affected by these changes?`

  const response = await fetch('https://ranker.endpoint.relace.run/v2/code/rank', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RELACE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      codebase,
      token_limit: 100000,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error('Relace API error:', response.status, errorText)
    throw new Error(`Relace API error: ${response.status}`)
  }

  const data = await response.json()
  const results: RankedFile[] = data.results || []

  return results
    .filter((r: RankedFile) => !stagedFiles.includes(r.filename))
    .filter((r: RankedFile) => r.score > 0.3)
    .slice(0, 10)
}

async function generateDraftMessage(
  stagedFiles: string[],
  relatedFiles: RankedFile[],
  diff: string
): Promise<string> {
  if (!GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY not configured')
  }

  const relatedSummary = relatedFiles
    .map((r) => `- ${r.filename} (relevance: ${r.score.toFixed(2)})`)
    .join('\n')

  const prompt = `You are helping a developer notify code owners about potentially impacted files.

The developer is making changes to: ${stagedFiles.join(', ')}

These files may be impacted:
${relatedSummary}

The actual diff:
\`\`\`
${diff.slice(0, 2000)}
\`\`\`

Write a brief, friendly Slack message (2-3 sentences) addressed to the primary owner (whoever owns the most impacted files). If there are other owners, mention them as CC'd.

Format like: "Hey @primary_owner - I'm updating [file]. This might impact [X files you own]. CC @other_owner for [their files]. Any concerns?"

Rules:
- Be concise and specific about what's changing
- Don't use "Hey folks" or generic greetings - address the primary owner directly
- Don't use emojis
- Keep it professional but friendly`

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }),
    }
  )

  if (!response.ok) {
    const errorText = await response.text()
    console.error('Gemini API error:', response.status, errorText)
    throw new Error(`Gemini API error: ${response.status}`)
  }

  const data = await response.json()
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text || ''

  return text
}

export async function POST(request: NextRequest) {
  try {
    // Verify authentication - try multiple header variations
    // Vercel/Next.js normalizes headers to lowercase
    const authHeader = request.headers.get('authorization') // lowercase!
      || request.headers.get('Authorization')
      || request.headers.get('x-auth-token')

    // Log headers for debugging
    console.log('Auth header received:', authHeader ? `${authHeader.slice(0, 30)}...` : 'null')

    let token: string | null = null

    if (authHeader?.startsWith('Bearer ')) {
      token = authHeader.slice(7)
    } else if (authHeader?.startsWith('bearer ')) {
      token = authHeader.slice(7) // lowercase bearer
    } else if (authHeader) {
      token = authHeader // x-auth-token doesn't have Bearer prefix
    }

    if (!token) {
      // Log all headers for debugging
      const allHeaders: Record<string, string> = {}
      request.headers.forEach((value, key) => {
        allHeaders[key] = key.toLowerCase().includes('auth') ? `${value.slice(0, 20)}...` : value
      })
      console.error('No auth token found. All headers:', JSON.stringify(allHeaders))
      return NextResponse.json({ error: 'Missing authorization header' }, { status: 401 })
    }

    const userId = await verifyCliToken(token)

    if (!userId) {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 })
    }

    // Parse request body
    const body = await request.json()
    const { diff, codebase, staged_files, git_remote, git_hash } = body

    if (!diff || !staged_files) {
      return NextResponse.json(
        { error: 'Missing required fields: diff, staged_files' },
        { status: 400 }
      )
    }

    // Check API keys are configured
    if (!RELACE_API_KEY) {
      return NextResponse.json(
        { error: 'Server configuration error: RELACE_API_KEY not set' },
        { status: 500 }
      )
    }

    if (!GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Server configuration error: GEMINI_API_KEY not set' },
        { status: 500 }
      )
    }

    let relatedFiles: RankedFile[]

    // Build query from diff
    const query = `Find files that are semantically related to these code changes and might be impacted:

${diff}

What other files in this codebase might need to be updated, reviewed, or could be affected by these changes?`

    // Use cached repo if git_remote provided, otherwise fall back to direct ranking
    if (git_remote && codebase) {
      try {
        const { repoId, isNew } = await getOrCreateRepo(git_remote, codebase, git_hash, userId)

        if (isNew) {
          // For newly created repos, embeddings may still be processing
          // Wait a bit or fall back to direct ranking
          console.log('New repo created, using direct ranking while embeddings process')
          relatedFiles = await rankRelatedFilesDirect(diff, codebase, staged_files)
        } else {
          // Use cached repo - much faster!
          relatedFiles = await retrieveFromRepo(repoId, query, staged_files)
        }
      } catch (cacheError) {
        console.error('Cache/retrieve error, falling back to direct ranking:', cacheError)
        if (!codebase) {
          return NextResponse.json(
            { error: 'Codebase required when git_remote lookup fails' },
            { status: 400 }
          )
        }
        relatedFiles = await rankRelatedFilesDirect(diff, codebase, staged_files)
      }
    } else if (codebase) {
      // No git remote - use direct ranking (slower but works)
      relatedFiles = await rankRelatedFilesDirect(diff, codebase, staged_files)
    } else {
      return NextResponse.json(
        { error: 'Either git_remote or codebase must be provided' },
        { status: 400 }
      )
    }

    // Generate draft message using Gemini (only if there are related files)
    let draftMessage = ''
    if (relatedFiles.length > 0) {
      draftMessage = await generateDraftMessage(staged_files, relatedFiles, diff)
    }

    return NextResponse.json({
      related_files: relatedFiles.map((f) => ({
        filename: f.filename,
        score: f.score,
        relevance: f.score,
      })),
      draft_message: draftMessage,
    })
  } catch (error) {
    console.error('Analyze error:', error)

    const message = error instanceof Error ? error.message : 'Internal server error'

    return NextResponse.json({ error: message }, { status: 500 })
  }
}
