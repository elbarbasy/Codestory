# Implementation progress: admin CRUD + media + sitemap

This commit continues the feature/full-vercel work and adds:

- src/lib/supabaseAdmin.ts — server-side supabase client (service role key)
- API endpoints:
  - POST /api/contact — saves contact form into contact_messages
  - GET/POST /api/services — list and create services (server-side)
  - POST /api/media — register uploaded media
  - GET /sitemap.xml — generates a simple sitemap using DB entries
- Dashboard enhancements:
  - /dashboard/services — list and create services (client + calls /api/services)
  - /dashboard/media — upload file to Supabase Storage and register media via /api/media

Notes & next steps:
- Replace `https://your-site.com` in sitemap route with your actual production domain after deploy.
- Admin auth uses Supabase magic link; server-side endpoints rely on SUPABASE_SERVICE_ROLE_KEY so ensure you set it in Vercel as secret.
- I kept the UI minimal and focused on correctness; I will continue polishing styles and implement additional CRUD pages (portfolio, pricing, faqs, testimonials) on request.
