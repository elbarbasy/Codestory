# 13. Database Design

## Objective
Design a clean, extensible database structure that supports the public website and the private admin dashboard.

## Core Entities
- users
- portfolios
- services
- pricing_packages
- pricing_addons
- testimonials
- faqs
- contact_messages
- leads
- settings
- media_assets
- analytics_events

## users
Stores owner account data and future admin accounts.
Key fields:
- id
- name
- email
- password
- role
- email_verified_at
- created_at
- updated_at

## portfolios
Stores project showcases.
Key fields:
- id
- title
- slug
- category
- description
- client_name
- tech_stack
- live_url
- github_url
- featured_image
- status
- created_at
- updated_at

## services
Stores public service blocks.
Key fields:
- id
- title
- slug
- summary
- description
- starting_price
- delivery_time
- is_visible
- created_at
- updated_at

## pricing_packages
Stores package definitions.
Key fields:
- id
- name
- slug
- description
- price
- features
- is_popular
- is_visible
- created_at
- updated_at

## pricing_addons
Stores optional add-ons.
Key fields:
- id
- name
- description
- price
- is_visible
- created_at
- updated_at

## testimonials
Stores client testimonials.
Key fields:
- id
- name
- role
- company
- avatar
- rating
- content
- is_visible
- created_at
- updated_at

## faqs
Stores frequently asked questions.
Key fields:
- id
- question
- answer
- sort_order
- is_visible
- created_at
- updated_at

## contact_messages
Stores messages submitted through the contact form.
Key fields:
- id
- name
- email
- whatsapp
- service_interest
- budget_range
- message
- status
- created_at
- updated_at

## leads
Stores qualified sales leads.
Key fields:
- id
- contact_message_id
- pipeline_status
- internal_notes
- created_at
- updated_at

## settings
Stores global website configuration.
Key fields:
- id
- key
- value
- group
- created_at
- updated_at

## media_assets
Stores uploaded media records.
Key fields:
- id
- filename
- path
- mime_type
- size
- alt_text
- created_at
- updated_at

## analytics_events
Stores lightweight event tracking.
Key fields:
- id
- event_type
- page_path
- device_type
- referrer
- metadata
- created_at

## Relationships
- A contact message can become a lead.
- A portfolio may belong to a category string or a future categories table.
- Services, packages, testimonials, and FAQs are visibility-driven CMS content.

## Indexing Recommendations
- Unique index on email in users
- Unique index on slug fields where applicable
- Index on status columns used for filtering
- Index on created_at for reporting and sorting

## Future Expansion
The structure should support future features such as:
- blog posts
- team members
- case studies
- invoices
- multilingual content tables
- client portal

## Acceptance Criteria
The database must be normalized enough to avoid duplication, simple enough to maintain, and flexible enough to support future growth without restructuring everything later.