import { NextRequest, NextResponse } from 'next/server'
import { auth, clerkClient } from '@clerk/nextjs/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY!

export async function POST(request: NextRequest) {
  try {
    // Verify user is authenticated
    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get user's external accounts (GitHub connection)
    const client = await clerkClient()
    const user = await client.users.getUser(userId)

    // Find GitHub account (provider name is 'oauth_github' on server-side)
    const githubAccount = user.externalAccounts.find(
      (account) => account.provider === 'oauth_github'
    )

    if (!githubAccount) {
      return NextResponse.json(
        { error: 'GitHub account not connected. Please connect GitHub in your account settings first.' },
        { status: 400 }
      )
    }

    // Get the OAuth access token using Clerk's getUserOauthAccessToken API
    // Note: directAccess via externalAccount.accessToken doesn't work, must use this API
    let githubToken: string | null = null

    try {
      // Note: Use 'github' not 'oauth_github' for getUserOauthAccessToken
      const tokenResponse = await client.users.getUserOauthAccessToken(
        userId,
        'github'
      )

      githubToken = tokenResponse.data[0]?.token || null

      if (!githubToken) {
        throw new Error('No token returned from Clerk OAuth API')
      }
    } catch (tokenError: any) {
      console.error('Error fetching OAuth token:', tokenError)
      return NextResponse.json(
        {
          error: 'Failed to retrieve GitHub access token from Clerk',
          details: tokenError.message
        },
        { status: 500 }
      )
    }

    // Create Supabase admin client (bypasses RLS for service operations)
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)

    // Find or create user in our database
    const { data: dbUser } = await supabaseAdmin
      .from('users')
      .select('id')
      .eq('clerk_user_id', userId)
      .single()

    let userDbId: string

    if (!dbUser) {
      // Create user if doesn't exist
      const { data: newUser, error: createError } = await supabaseAdmin
        .from('users')
        .insert({
          clerk_user_id: userId,
          email: user.emailAddresses[0]?.emailAddress || '',
        })
        .select('id')
        .single()

      if (createError || !newUser) {
        throw new Error('Failed to create user in database')
      }
      userDbId = newUser.id
    } else {
      userDbId = dbUser.id
    }

    // Upsert GitHub token in credentials table
    const { error: upsertError } = await supabaseAdmin
      .from('credentials')
      .upsert(
        {
          user_id: userDbId,
          github_token: githubToken,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: 'user_id',
        }
      )

    if (upsertError) {
      throw upsertError
    }

    return NextResponse.json({
      success: true,
      message: 'GitHub token synced successfully',
      github_username: githubAccount.username,
    })
  } catch (error) {
    console.error('Error syncing GitHub token:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
