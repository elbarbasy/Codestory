-- Supabase schema migration for CodeStory
-- Run this in Supabase SQL editor (https://app.supabase.com)

-- users
create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text not null unique,
  password text,
  role text default 'owner',
  email_verified_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- portfolios
create table if not exists portfolios (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  category text,
  description text,
  client_name text,
  tech_stack text,
  live_url text,
  github_url text,
  featured_image text,
  status text default 'published',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- services
create table if not exists services (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  summary text,
  description text,
  starting_price numeric,
  delivery_time text,
  is_visible boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- pricing_packages
create table if not exists pricing_packages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  price numeric,
  features jsonb,
  is_popular boolean default false,
  is_visible boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- pricing_addons
create table if not exists pricing_addons (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  price numeric,
  is_visible boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- testimonials
create table if not exists testimonials (
  id uuid primary key default gen_random_uuid(),
  name text,
  role text,
  company text,
  avatar text,
  rating int,
  content text,
  is_visible boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- faqs
create table if not exists faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  sort_order int default 0,
  is_visible boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- contact_messages
create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text,
  whatsapp text,
  service_interest text,
  budget_range text,
  message text,
  status text default 'new',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- leads
create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  contact_message_id uuid references contact_messages(id) on delete set null,
  pipeline_status text default 'new',
  internal_notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- settings
create table if not exists settings (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  value jsonb,
  group_name text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- media_assets
create table if not exists media_assets (
  id uuid primary key default gen_random_uuid(),
  filename text,
  path text,
  mime_type text,
  size bigint,
  alt_text text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- analytics_events
create table if not exists analytics_events (
  id uuid primary key default gen_random_uuid(),
  event_type text,
  page_path text,
  device_type text,
  referrer text,
  metadata jsonb,
  created_at timestamptz default now()
);

-- Index recommendations
create index if not exists idx_created_at_portfolios on portfolios(created_at);
create index if not exists idx_created_at_services on services(created_at);
create index if not exists idx_contact_status on contact_messages(status);
