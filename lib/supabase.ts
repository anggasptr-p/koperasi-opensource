import { createClient } from '@supabase/supabase-js'

// Ambil bensin dari file .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Validasi dikit biar gak meledak pas dijalanin
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("⚠️ Ardi, URL atau Anon Key Supabase lo masih kosong di .env.local!")
}

// Inisialisasi koneksi biar bisa dipake di seluruh aplikasi
export const supabase = createClient(supabaseUrl, supabaseAnonKey)