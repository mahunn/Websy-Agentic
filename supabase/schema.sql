-- ==============================================================================
-- WEBSY AI CHATBOT LEAD CAPTURE SCHEMA
-- Run this SQL in your Supabase SQL Editor (Dashboard > SQL Editor > New Query)
-- ==============================================================================

-- 1. Create the leads table
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  phone TEXT,
  email TEXT,
  summary TEXT,
  chat_history JSONB DEFAULT '[]'::jsonb,
  source TEXT DEFAULT 'ai_chat',
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Add helpful indexes for fast lookup and sorting
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON public.leads (created_at DESC);
CREATE INDEX IF NOT EXISTS leads_phone_idx ON public.leads (phone);
CREATE INDEX IF NOT EXISTS leads_email_idx ON public.leads (email);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- 4. Policy: Allow server-side service role full access (insert/read/update/delete)
CREATE POLICY "Allow service role full access" ON public.leads
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- 5. Policy: Allow insert with anon key if using client-side anon key fallback
CREATE POLICY "Allow anonymous insert" ON public.leads
  FOR INSERT
  TO anon
  WITH CHECK (true);
