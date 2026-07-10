# 12. Admin Dashboard

## Objective
Provide a private owner-only dashboard to manage all public website content without editing code.

## Access Rules
- Dashboard URL: `/admin`
- Owner-only access
- No public registration
- No public user roles at initial release

## Login Page
Simple, premium login page with:
- email
- password
- remember me
- forgot password link

## Dashboard Structure
Sidebar sections:
- Dashboard
- Portfolio
- Services
- Pricing
- Testimonials
- FAQ
- Contact Messages
- Leads
- Analytics
- Media Manager
- Settings
- Users
- Logout

## Dashboard Home
Show summary cards:
- Total Leads
- New Messages
- Total Projects
- Page Views
- Conversion Rate

## Content Management Modules
### Portfolio
- Create
- Edit
- Delete
- Upload images
- Manage category
- Manage live link
- Manage tech stack

### Services
- Edit service titles
- Edit descriptions
- Update pricing
- Toggle visible/invisible

### Pricing
- Modify packages
- Update add-ons
- Change most popular package
- Edit comparison table

### Testimonials
- Add testimonial
- Edit rating
- Set author name and role
- Upload avatar

### FAQ
- Create questions and answers
- Reorder items
- Toggle visibility

### Contact Messages
- View all incoming inquiries
- Mark as new / in progress / deal / completed
- Store timestamp and contact data

### Leads
- Track project interest
- View status pipeline
- Add internal notes

### Analytics
- Track visits
- Device type
- Traffic source
- Conversion trends

### Media Manager
- Upload and manage images
- Reuse assets across pages

### Settings
- Brand name
- Logo
- Contact links
- Social links
- Language preferences
- SEO defaults

## Security
- Password hashing
- Session timeout
- Rate limiting on login
- Middleware protection for all admin routes
- Optional 2FA in future

## UX Rules
- Clean, fast, and easy to navigate
- Responsive on mobile and desktop
- Use a premium admin layout, but prioritize functionality over decoration

## Acceptance Criteria
The dashboard must allow the owner to fully manage the website content securely, quickly, and without developer intervention.