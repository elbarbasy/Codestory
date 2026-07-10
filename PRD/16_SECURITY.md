# 16. Security

## Objective
Protect the owner dashboard, contact submissions, and project data while keeping the user experience smooth.

## Authentication
- Only authenticated owner/admin users may access `/admin`
- No public registration on the initial release
- Passwords must be hashed securely

## Authorization
- Use role-based access control
- Owner role has full access
- Future roles may be added later if needed

## Session Security
- Session timeout after inactivity
- Secure cookies
- Logout on expiry

## Login Protection
- Rate limit failed login attempts
- Optional CAPTCHA after repeated failures
- Optional 2FA in future

## Form Security
- Validate all inputs server-side
- Sanitize text content where needed
- Protect against CSRF
- Prevent oversized requests

## File Upload Security
- Restrict file types
- Limit file size
- Store uploads in secure storage
- Never trust client-side MIME declarations alone

## API Security
- Protect admin endpoints
- Do not expose sensitive data in public endpoints
- Use consistent authorization checks
- Return minimal error details in production

## Infrastructure Security
- Enforce HTTPS
- Keep secrets in environment variables
- Never commit credentials to the repository
- Keep backend and storage access separated where possible

## Operational Security
- Log important admin actions
- Track content changes
- Track failed login attempts
- Be able to audit lead and message changes

## Privacy Considerations
- Collect only the data required to handle inquiries
- Avoid unnecessary personal data collection
- Keep contact messages accessible only to the owner/admin team

## Acceptance Criteria
The system must protect owner access, reduce common attack vectors, and keep all sensitive operations properly gated without making the website hard to use.