# Supabase setup & deploy notes for CodeStory

This file explains how to set up Supabase for CodeStory and run the provided SQL migration.

1) Create a Supabase project
- Go to https://app.supabase.com and create a new project.
- Note the Project URL and anon/public key (Settings → API).
- Obtain the Service Role Key (Settings → API → Service key). Keep it secret.

2) Run migrations
- Open Supabase Dashboard → SQL Editor.
- Open db/migrations.sql in this repo and paste the contents into the SQL editor and run it.
- This will create the initial schema (users, portfolios, services, pricing, faqs, contact_messages, etc.).

3) Storage
- In Supabase Dashboard → Storage, create a bucket named `media` (public or private depending on your preference).
- Configure CORS / policies as needed.

4) Auth
- In Supabase → Authentication → Settings, enable Email sign-in.
- Create the owner user (codestory26@gmail.com) via Authentication → Users (Create user) or sign up with that email.

5) Environment variables
- In Vercel project settings, add the environment variables from .env.example (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY, NEXT_PUBLIC_OWNER_EMAIL).

6) Service role key usage
- The SUPABASE_SERVICE_ROLE_KEY must only be used in server-side code (API routes, server actions). Do NOT expose it to the client.

7) Optional: email notifications
- If you want contact form email notifications later, add SMTP credentials to Vercel env and enable sending in server action.

8) Verification
- After deploying to Vercel and setting env vars, visit /dashboard to sign in as owner and verify CRUD flows.

If you need me to run migrations or perform Supabase setup, tell me and provide temporary access; otherwise you can run the steps above yourself.
