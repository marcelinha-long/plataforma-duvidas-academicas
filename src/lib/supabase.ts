import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipos para o banco de dados
export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          created_at: string;
          subscription_plan: 'free' | 'monthly' | 'annual';
          questions_used: number;
          questions_limit: number;
          subscription_active: boolean;
        };
        Insert: {
          id: string;
          email: string;
          created_at?: string;
          subscription_plan?: 'free' | 'monthly' | 'annual';
          questions_used?: number;
          questions_limit?: number;
          subscription_active?: boolean;
        };
        Update: {
          id?: string;
          email?: string;
          created_at?: string;
          subscription_plan?: 'free' | 'monthly' | 'annual';
          questions_used?: number;
          questions_limit?: number;
          subscription_active?: boolean;
        };
      };
    };
  };
};
