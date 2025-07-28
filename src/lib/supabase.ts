import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Only create client if environment variables are available
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Client-side Supabase client
export const createClientComponentClient = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  if (!url || !key) {
    console.error('Environment variables check:')
    console.error('NEXT_PUBLIC_SUPABASE_URL:', url)
    console.error('NEXT_PUBLIC_SUPABASE_ANON_KEY exists:', !!key)
    throw new Error(`Missing Supabase environment variables: url=${!!url}, key=${!!key}`)
  }
  
  return createClient(url, key)
}

// Server-side Supabase client (for API routes)
export const createServerComponentClient = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  
  if (!url || !key) {
    throw new Error('Missing Supabase environment variables')
  }
  
  return createClient(url, key)
} 