# Public lead flow implemented

This commit adds public-facing detail pages and a request-quote modal that collects leads without requiring public registration. The modal posts to /api/contact which saves the message and creates an analytics_events record.

Files added/updated:
- src/app/services/[slug]/page.tsx (server-side fetch service by slug + CTA to open modal)
- src/app/portfolio/[slug]/page.tsx (server-side fetch portfolio by slug + CTA)
- src/components/RequestQuoteModal.tsx (client-side modal component)
- src/components/RequestQuoteModalLoader.tsx (renders modal root for client-side component)
- src/components/RequestQuoteModal.js (placeholder loader)
- src/app/api/contact/route.ts (server-side contact handler modified to add analytics event)
- src/app/thank-you/page.tsx (thank you page)
- src/app/layout.tsx updated to include modal loader

Deployment notes:
- Ensure SUPABASE keys are set in Vercel; modal relies on client-side fetch to /api/contact which requires server-side SUPABASE_SERVICE_ROLE_KEY to be present for the route.
- After deploy, test the flow by visiting a service or portfolio detail and submitting the request-quote form.
