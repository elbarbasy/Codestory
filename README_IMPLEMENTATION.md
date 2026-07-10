# CodeStory Supabase setup (placeholder assets)

This branch implements a Vercel-friendly version of CodeStory using Next.js and Supabase. You chose to provide Supabase setup yourself; the repository now includes a SQL migration file at db/migrations.sql and helper instructions.

What I added in feature/full-vercel branch:
- db/migrations.sql: SQL to create tables per PRD/13_DATABASE_DESIGN.md
- src/lib/supabaseClient.ts: simple Supabase client wrapper (client-side)
- Admin dashboard skeleton under /src/app/dashboard (login + dashboard placeholder)
- .env.example and README_SUPABASE.md with setup instructions
- package.json updated to include @supabase/supabase-js

Next steps for you (quick checklist):
1. Create Supabase project and run db/migrations.sql in SQL editor.
2. Create a Storage bucket (media) and configure access.
3. Add env vars in Vercel (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY, NEXT_PUBLIC_OWNER_EMAIL).
4. Deploy the repo to Vercel.
5. Sign in via /dashboard/login using the owner email (codestory26@gmail.com) to access the dashboard.

If you want, I can continue and implement full CRUD pages in the dashboard (create/edit services, portfolio upload flow, etc.).
