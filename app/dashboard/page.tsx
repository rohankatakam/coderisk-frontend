'use client'

import { useEffect, useState } from 'react'
import { useAuth, useUser } from '@clerk/nextjs'
import { createClerkSupabaseClient } from '@/lib/supabase'

interface Credentials {
  openai_api_key: string | null
  github_token: string | null
}

export default function DashboardPage() {
  const { getToken } = useAuth()
  const { user } = useUser()
  const [credentials, setCredentials] = useState<Credentials>({
    openai_api_key: null,
    github_token: null,
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [validating, setValidating] = useState(false)
  const [message, setMessage] = useState('')
  const [validationErrors, setValidationErrors] = useState<{
    openai?: string
    github?: string
  }>({})
  const [showOpenAI, setShowOpenAI] = useState(false)
  const [showGitHub, setShowGitHub] = useState(false)
  const [githubConnected, setGithubConnected] = useState(false)
  const [githubUsername, setGithubUsername] = useState<string | null>(null)
  const [syncing, setSyncing] = useState(false)

  useEffect(() => {
    if (user?.id) {
      loadCredentials()
      checkGithubConnection()
    } else if (user !== undefined && !user?.id) {
      // User object loaded but no ID (shouldn't happen if authenticated)
      setLoading(false)
    }
  }, [user])

  async function checkGithubConnection() {
    try {
      // Check if user has GitHub connected via Clerk's external accounts
      // Note: Client-side uses 'github', server-side uses 'oauth_github'
      const githubAccount = user?.externalAccounts?.find(
        (account) => account.provider === 'github' || account.provider === 'oauth_github'
      )

      if (githubAccount) {
        setGithubConnected(true)
        setGithubUsername(githubAccount.username || null)
      }
    } catch (error) {
      console.error('Error checking GitHub connection:', error)
    }
  }

  async function syncGithubToken() {
    try {
      setSyncing(true)
      setMessage('')
      setValidationErrors({})

      const response = await fetch('/api/sync-github-token', {
        method: 'POST',
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to sync GitHub token')
      }

      // Reload credentials to show the new token
      await loadCredentials()

      setMessage(`✅ GitHub token synced successfully! Connected as @${result.github_username}`)
      setTimeout(() => setMessage(''), 5000)
    } catch (error) {
      console.error('Error syncing GitHub token:', error)
      setMessage('❌ ' + (error as Error).message)
    } finally {
      setSyncing(false)
    }
  }

  async function loadCredentials() {
    try {
      setLoading(true)
      const supabase = await createClerkSupabaseClient(getToken)

      if (!user?.id) {
        console.error('No user ID available')
        return
      }

      // First, ensure user exists in our database
      let userId: string | null = null

      const { data: existingUser, error: userError } = await supabase
        .from('users')
        .select('id')
        .eq('clerk_user_id', user.id)
        .maybeSingle()

      if (existingUser) {
        userId = existingUser.id
      } else {
        // User doesn't exist, create them
        const { data: newUser, error: insertError } = await supabase
          .from('users')
          .insert({
            clerk_user_id: user.id,
            email: user.primaryEmailAddress?.emailAddress || '',
          })
          .select('id')
          .single()

        if (insertError) {
          console.error('Error creating user:', insertError)
          throw insertError
        }

        userId = newUser.id
      }

      // Load credentials if user exists
      if (userId) {
        const { data: credsData } = await supabase
          .from('credentials')
          .select('*')
          .eq('user_id', userId)
          .maybeSingle()

        if (credsData) {
          setCredentials({
            openai_api_key: credsData.openai_api_key || '',
            github_token: credsData.github_token || '',
          })
        }
      }
    } catch (error) {
      console.error('Error loading credentials:', error)
      setMessage('Error loading credentials. Please refresh the page.')
    } finally {
      setLoading(false)
    }
  }

  async function validateCredentials() {
    try {
      setValidating(true)
      setValidationErrors({})
      setMessage('')

      const response = await fetch('/api/validate-keys', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          openai_api_key: credentials.openai_api_key,
          github_token: credentials.github_token,
        }),
      })

      const results = await response.json()

      const errors: { openai?: string; github?: string } = {}

      if (credentials.openai_api_key && !results.openai.valid) {
        errors.openai = results.openai.error || 'Invalid API key'
      }

      if (credentials.github_token && !results.github.valid) {
        errors.github = results.github.error || 'Invalid token'
      }

      setValidationErrors(errors)

      if (Object.keys(errors).length === 0) {
        setMessage('✅ All credentials are valid!')
        setTimeout(() => setMessage(''), 3000)
        return true
      } else {
        setMessage('⚠️ Some credentials are invalid')
        return false
      }
    } catch (error) {
      console.error('Validation error:', error)
      setMessage('❌ Failed to validate credentials')
      return false
    } finally {
      setValidating(false)
    }
  }

  async function saveCredentials() {
    try {
      setSaving(true)
      setMessage('')
      setValidationErrors({})

      // Validate first
      const isValid = await validateCredentials()
      if (!isValid && (credentials.openai_api_key || credentials.github_token)) {
        setSaving(false)
        return
      }

      const supabase = await createClerkSupabaseClient(getToken)

      if (!user?.id) {
        throw new Error('No user ID available')
      }

      // Ensure user exists first
      let userId: string | null = null

      const { data: existingUser } = await supabase
        .from('users')
        .select('id')
        .eq('clerk_user_id', user.id)
        .maybeSingle()

      if (existingUser) {
        userId = existingUser.id
      } else {
        // Create user if doesn't exist
        const { data: newUser, error: insertError } = await supabase
          .from('users')
          .insert({
            clerk_user_id: user.id,
            email: user.primaryEmailAddress?.emailAddress || '',
          })
          .select('id')
          .single()

        if (insertError) throw insertError
        userId = newUser.id
      }

      if (!userId) {
        throw new Error('Failed to get or create user')
      }

      // Upsert credentials
      const { error } = await supabase
        .from('credentials')
        .upsert(
          {
            user_id: userId,
            openai_api_key: credentials.openai_api_key || null,
            github_token: credentials.github_token || null,
            updated_at: new Date().toISOString(),
          },
          {
            onConflict: 'user_id',
          }
        )

      if (error) throw error

      setMessage('✅ Credentials saved successfully!')
      setTimeout(() => setMessage(''), 3000)
    } catch (error) {
      console.error('Error saving credentials:', error)
      setMessage('❌ Error saving credentials: ' + (error as Error).message)
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-sm text-gray-600 mt-1">
                Manage your API keys for CodeRisk CLI
              </p>
            </div>
            <a
              href="/"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h2 className="text-xl font-semibold mb-6">API Credentials</h2>

          {message && (
            <div className="mb-6 p-4 bg-gray-50 rounded-md text-sm">
              {message}
            </div>
          )}

          <div className="space-y-6">
            {/* OpenAI API Key */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                OpenAI API Key
              </label>
              <div className="relative">
                <input
                  type={showOpenAI ? 'text' : 'password'}
                  value={credentials.openai_api_key || ''}
                  onChange={(e) =>
                    setCredentials({ ...credentials, openai_api_key: e.target.value })
                  }
                  placeholder="sk-proj-..."
                  className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowOpenAI(!showOpenAI)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  aria-label={showOpenAI ? 'Hide OpenAI key' : 'Show OpenAI key'}
                >
                  {showOpenAI ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              {validationErrors.openai && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  {validationErrors.openai}
                </p>
              )}
              <p className="mt-1 text-xs text-gray-500">
                Used for AI-powered code analysis
              </p>
            </div>

            {/* GitHub Access Token */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  GitHub Access Token
                </label>
                {githubConnected && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Connected as @{githubUsername}
                  </span>
                )}
              </div>

              {githubConnected ? (
                <div className="space-y-3">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-green-800 mb-3">
                      Your GitHub account is connected via OAuth. Click the button below to sync your always-fresh access token.
                    </p>
                    <button
                      onClick={syncGithubToken}
                      disabled={syncing}
                      className="w-full bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {syncing ? (
                        <>
                          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Syncing...
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                          </svg>
                          Sync GitHub Token
                        </>
                      )}
                    </button>
                  </div>
                  <details className="text-sm">
                    <summary className="cursor-pointer text-gray-600 hover:text-gray-900">
                      Or manually enter a personal access token
                    </summary>
                    <div className="mt-3 relative">
                      <input
                        type={showGitHub ? 'text' : 'password'}
                        value={credentials.github_token || ''}
                        onChange={(e) =>
                          setCredentials({ ...credentials, github_token: e.target.value })
                        }
                        placeholder="ghp_..."
                        className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={() => setShowGitHub(!showGitHub)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        aria-label={showGitHub ? 'Hide GitHub token' : 'Show GitHub token'}
                      >
                        {showGitHub ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </details>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800 mb-2">
                      <strong>Recommended:</strong> Connect your GitHub account for always-fresh OAuth tokens.
                    </p>
                    <p className="text-xs text-blue-700 mt-2">
                      To connect GitHub: Click your profile icon → Manage account → Connected accounts → Add connection → GitHub
                    </p>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-2">
                      Or enter a personal access token manually:
                    </label>
                    <div className="relative">
                      <input
                        type={showGitHub ? 'text' : 'password'}
                        value={credentials.github_token || ''}
                        onChange={(e) =>
                          setCredentials({ ...credentials, github_token: e.target.value })
                        }
                        placeholder="ghp_..."
                        className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={() => setShowGitHub(!showGitHub)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        aria-label={showGitHub ? 'Hide GitHub token' : 'Show GitHub token'}
                      >
                        {showGitHub ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {validationErrors.github && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  {validationErrors.github}
                </p>
              )}
              <p className="mt-1 text-xs text-gray-500">
                Used for repository access and analysis
              </p>
            </div>

            {/* Validate & Save Buttons */}
            <div className="pt-4 flex gap-3">
              <button
                onClick={validateCredentials}
                disabled={validating || saving}
                className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md font-medium hover:bg-gray-50 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
              >
                {validating ? 'Validating...' : 'Validate Keys'}
              </button>
              <button
                onClick={saveCredentials}
                disabled={saving || validating}
                className="bg-black text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {saving ? 'Saving...' : 'Validate & Save'}
              </button>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-sm font-semibold text-blue-900 mb-2">
            🔒 Your credentials are secure
          </h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Stored encrypted in Supabase</li>
            <li>• Only accessible by you (Row Level Security)</li>
            <li>• Used only by your local CodeRisk CLI</li>
            <li>• Never sent to our servers or third parties</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
