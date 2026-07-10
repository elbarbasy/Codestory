# 15. SEO and Performance

## Objective
Make CodeStory discoverable in search engines while keeping the website extremely fast and responsive.

## SEO Principles
- Every page should have unique metadata
- Content should be structured for humans first, search engines second
- Use semantic HTML
- Use clean URLs
- Support social sharing previews

## Metadata Requirements
Each page should include:
- title
- description
- canonical URL
- Open Graph tags
- Twitter Card tags
- structured data where relevant

## Sitemap
Generate an XML sitemap with all public pages.

## Robots
Provide a correct robots.txt configuration.

## Schema Markup
Use schema.org where useful:
- Organization
- WebSite
- Service
- FAQPage
- BreadcrumbList

## Image SEO
- Use descriptive alt text
- Optimize image sizes
- Use modern image formats when possible
- Lazy-load below-the-fold images

## Performance Principles
- Prioritize Core Web Vitals
- Reduce unnecessary client-side JavaScript
- Use code splitting
- Use dynamic imports for heavy components
- Prefer server rendering where appropriate

## Frontend Performance Rules
- Optimize hero assets first
- Keep motion lightweight
- Avoid large uncompressed media
- Use skeletons or subtle placeholders while content loads

## Caching
- Cache static content where possible
- Revalidate content strategically
- Avoid repeated expensive API calls

## Accessibility and Performance Balance
Performance should not reduce accessibility.
Animations must respect reduced-motion settings.

## Monitoring
Track:
- LCP
- CLS
- INP
- Page load time
- Conversion rate

## Acceptance Criteria
The website should aim for strong Lighthouse scores, load quickly on mobile networks, and remain visually polished while staying technically efficient.