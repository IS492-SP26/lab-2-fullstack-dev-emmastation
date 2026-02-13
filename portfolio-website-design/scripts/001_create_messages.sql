-- Create messages table for contact form submissions
create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table public.messages enable row level security;

-- Allow anonymous inserts (so visitors can submit the contact form without auth)
create policy "Allow anonymous inserts" on public.messages
  for insert
  with check (true);

-- Only authenticated users (e.g. an admin) can read messages
create policy "Allow authenticated reads" on public.messages
  for select
  using (auth.role() = 'authenticated');
