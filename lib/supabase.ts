/**
 * Supabase client — the connection to your Supabase database.
 *
 * This file is imported anywhere we need to read or write data
 * (dashboard, partner signup, donation tracking, etc).
 *
 * Credentials come from environment variables set in Vercel:
 *   - NEXT_PUBLIC_SUPABASE_URL (your project URL)
 *   - NEXT_PUBLIC_SUPABASE_ANON_KEY (the public/anon key)
 *
 * NEXT_PUBLIC_ prefix means these are safe to use in the browser
 * (Supabase's anon key is meant to be public; Row Level Security
 * policies enforce who can see what).
 */

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type definitions for the tables (helps TypeScript catch errors)
export type SupportCount = {
  id: string;
  count_date: string;
  children_supported: number;
  children_needed: number;
  note: string | null;
  created_at: string;
  updated_at: string;
};

export type Partner = {
  id: string;
  user_id: string | null;
  email: string;
  full_name: string | null;
  daily_amount: number;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  status: string;
  created_at: string;
  updated_at: string;
};

export type Donation = {
  id: string;
  partner_id: string;
  amount_cents: number;
  stripe_payment_intent_id: string | null;
  status: string;
  created_at: string;
};
