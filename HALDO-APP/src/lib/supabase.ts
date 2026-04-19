import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/**
 * 브라우저용 Supabase 클라이언트
 * - 클라이언트 컴포넌트에서 사용
 * - anon key 기반, RLS 정책 적용
 */
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
