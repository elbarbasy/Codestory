# 14. API Specification

## Objective
Expose a clean REST API from the backend so the website and admin dashboard can retrieve and manage content consistently.

## API Principles
- RESTful and predictable
- JSON responses only
- Consistent error format
- Versioned endpoints
- Secure by default

## Base Path
`/api/v1`

## Authentication
Use secure owner-only authentication for admin resources.
Future expansion can support token-based access if needed.

## Public Endpoints
### GET /api/v1/home
Returns homepage content blocks.

### GET /api/v1/services
Returns visible services.

### GET /api/v1/portfolio
Returns visible portfolio items.

### GET /api/v1/pricing
Returns visible packages and add-ons.

### GET /api/v1/testimonials
Returns visible testimonials.

### GET /api/v1/faqs
Returns visible FAQs.

### GET /api/v1/settings
Returns global site settings.

## Contact Endpoints
### POST /api/v1/contact
Creates a new contact message.
Required fields:
- name
- email
- whatsapp
- service_interest
- message

Optional fields:
- budget_range

## Admin Endpoints
These routes should be protected and available only to authenticated owner/admin users.

### GET /api/v1/admin/dashboard
Returns summary metrics.

### CRUD endpoints for:
- portfolio
- services
- pricing packages
- pricing add-ons
- testimonials
- faqs
- settings
- media assets
- leads
- contact messages

## Response Shape
Standardize responses.
Example success:
```json
{
  "success": true,
  "message": "Data retrieved successfully",
  "data": []
}
```

Example error:
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "email": ["The email field is required."]
  }
}
```

## Validation Rules
- Validate required fields server-side
- Normalize strings where appropriate
- Reject invalid email and phone formats
- Limit request size for form submissions

## Pagination
Use pagination for collections that may grow:
- portfolio
- contact messages
- leads
- media assets

## Filtering
Support filtering by:
- category
- status
- visibility
- date range

## Sorting
Support sorting by:
- created_at
- updated_at
- popularity (future enhancement)

## Error Handling
Return clear messages with proper status codes:
- 200 OK
- 201 Created
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 422 Validation Error
- 500 Server Error

## Acceptance Criteria
The API must be easy to consume, secure, versioned, and stable enough to support the public site and the admin CMS without duplicated business logic.