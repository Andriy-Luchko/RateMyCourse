import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://kfdxcwigutzpikwjbtwi.supabase.co';
const supabaseKey = import.meta.env.VITE_APP_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
