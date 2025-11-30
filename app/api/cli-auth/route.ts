import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { SignJWT } from 'jose'

// Secret for signing CLI tokens - in production, use a proper secret from env
const CLI_TOKEN_SECRET = new TextEncoder().encode(
  process.env.CLI_TOKEN_SECRET || 'crisk-cli-token-secret-change-in-production'
)

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const callback = searchParams.get('callback')

  // If no callback, this is the initial auth request - redirect to sign-in
  if (!callback) {
    return NextResponse.json(
      { error: 'Missing callback parameter' },
      { status: 400 }
    )
  }

  // Check if user is authenticated
  const { userId } = await auth()

  if (!userId) {
    // Not authenticated - redirect to sign-in with return URL
    const currentUrl = request.url
    const signInUrl = `/sign-in?redirect_url=${encodeURIComponent(currentUrl)}`
    return NextResponse.redirect(new URL(signInUrl, request.url))
  }

  // User is authenticated - generate a CLI token
  try {
    // Create a JWT token for the CLI
    const token = await new SignJWT({
      userId,
      type: 'cli',
      iat: Math.floor(Date.now() / 1000),
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('30d') // Token valid for 30 days
      .setIssuedAt()
      .sign(CLI_TOKEN_SECRET)

    // Redirect back to CLI callback with token
    const redirectUrl = new URL(callback)
    redirectUrl.searchParams.set('token', token)

    return NextResponse.redirect(redirectUrl)
  } catch (error) {
    console.error('Error generating CLI token:', error)

    // Redirect with error
    const redirectUrl = new URL(callback)
    redirectUrl.searchParams.set('error', 'token_generation_failed')
    redirectUrl.searchParams.set('error_description', 'Failed to generate authentication token')

    return NextResponse.redirect(redirectUrl)
  }
}
