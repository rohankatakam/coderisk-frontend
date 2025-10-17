import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Create a Supabase client with Clerk session token
export async function createClerkSupabaseClient(getToken: () => Promise<string | null>) {
  const token = await getToken({ template: 'supabase' })

  if (!token) {
    throw new Error('No Clerk session token available')
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  })
}
