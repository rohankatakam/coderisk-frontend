import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'

export async function POST(request: NextRequest) {
  try {
    // Verify user is authenticated
    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { openai_api_key, github_token } = await request.json()

    const results = {
      openai: { valid: false, error: null as string | null },
      github: { valid: false, error: null as string | null },
    }

    // Validate OpenAI API Key
    if (openai_api_key) {
      try {
        // Check format first
        if (!openai_api_key.startsWith('sk-')) {
          results.openai.error = 'Invalid format: OpenAI keys start with "sk-"'
        } else {
          // Test the key with OpenAI API
          const response = await fetch('https://api.openai.com/v1/models', {
            headers: {
              'Authorization': `Bearer ${openai_api_key}`,
            },
          })

          if (response.ok) {
            results.openai.valid = true
          } else if (response.status === 401) {
            results.openai.error = 'Invalid or expired API key'
          } else if (response.status === 429) {
            results.openai.error = 'Rate limited - key might be valid but quota exceeded'
            results.openai.valid = true // Consider it valid but warn
          } else {
            results.openai.error = `OpenAI API error: ${response.status}`
          }
        }
      } catch (error) {
        results.openai.error = 'Failed to validate OpenAI key'
      }
    }

    // Validate GitHub Token
    if (github_token) {
      try {
        // Check format first
        if (!github_token.startsWith('ghp_') && !github_token.startsWith('github_pat_')) {
          results.github.error = 'Invalid format: GitHub tokens start with "ghp_" or "github_pat_"'
        } else {
          // Test the token with GitHub API
          const response = await fetch('https://api.github.com/user', {
            headers: {
              'Authorization': `Bearer ${github_token}`,
              'Accept': 'application/vnd.github+json',
            },
          })

          if (response.ok) {
            results.github.valid = true
          } else if (response.status === 401) {
            results.github.error = 'Invalid or expired token'
          } else if (response.status === 403) {
            results.github.error = 'Token lacks required permissions'
          } else {
            results.github.error = `GitHub API error: ${response.status}`
          }
        }
      } catch (error) {
        results.github.error = 'Failed to validate GitHub token'
      }
    }

    return NextResponse.json(results)
  } catch (error) {
    console.error('Validation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
