# 04. Design System

## Purpose
Establish reusable visual rules so every page, component, and admin screen feels like part of the same premium product.

## Design Principles
- Premium, not noisy
- Minimal, not empty
- Technical, not cold
- Animated, not distracting
- Conversion-first, not decorative-first

## Layout Grid
- Desktop container: max-width 1280px
- Content width should be comfortable and centered
- Use a consistent 12-column grid on large screens
- Use a 4-column or stacked layout on mobile
- Maintain generous spacing between sections

## Spacing Scale
Use a consistent spacing scale:
- 4px
- 8px
- 12px
- 16px
- 24px
- 32px
- 48px
- 64px
- 96px

## Border Radius
- Buttons: 14px to 16px
- Cards: 20px to 24px
- Modals / panels: 24px to 28px
- Pills / badges: fully rounded or 9999px

## Shadow Rules
Use soft shadows only.
Avoid harsh black shadows.
Prefer layered shadow depth with subtle blur.

## Color Usage Rules
- Primary blue is the main accent for actions and highlights.
- Dark navy is used for contrast sections and deep backgrounds.
- White is used for breathing space, not as the only background.
- Blue glow is used sparingly to emphasize premium details.
- Gray tones are for text hierarchy and borders.

## Background Language
Backgrounds should alternate between:
- light neutral sections,
- soft gradient hero sections,
- dark feature sections,
- glow accent CTA sections.

## Typography Scale
### Headings
- H1: very large, bold, concise
- H2: section headers with strong hierarchy
- H3: component headers

### Body Text
- Body should be readable and spacious
- Line height should remain comfortable
- Avoid overly dense paragraphs

### Code / Terminal Text
Use monospace for:
- opening loader
- code snippets
- technical badges
- command-like visual blocks

## Buttons
### Primary Button
- Filled blue background
- White text
- Soft glow on hover
- Slight lift on hover

### Secondary Button
- Transparent or light background
- Blue border or blue text
- Lower emphasis than primary

### Ghost Button
- Minimal styling
- Used in navigation or utility actions

## Cards
Cards must feel premium and interactive:
- Rounded corners
- Subtle border
- Hover elevation
- Optional slight tilt or glow
- Clear title, description, and action area

## Badges
- Use badges for package labels like Most Popular or New
- Use small pill shapes
- Keep them concise

## Forms
Forms should have:
- clear labels,
- enough spacing,
- visible focus state,
- readable helper text,
- strong mobile usability.

## Navbar
- Desktop: full horizontal navigation
- Mobile: logo, language toggle, hamburger menu
- On scroll, navbar should become glass-like and slightly condensed

## Footer
- Clean and structured
- Include essential links only
- Use a darker background or subtle gradient for contrast

## Motion Tokens
### Duration
- Fast: 150ms to 200ms
- Normal: 250ms to 350ms
- Slow: 450ms to 650ms

### Easing
Use smooth, premium easing for hover and entrance states.

## Icon Style
- Use clean line icons
- Keep stroke thickness consistent
- Do not mix icon styles across the product

## Component Reuse Rules
Every repeated UI pattern must become a reusable component:
- Buttons
- Cards
- Section headings
- Feature lists
- Pricing cards
- FAQ items
- Toggle language switch
- Mobile menu

## Accessibility Rules
- Maintain readable contrast
- Provide keyboard focus states
- Ensure tappable targets are large enough on mobile
- Avoid motion that feels abrupt or disorienting

## Acceptance Criteria
- All pages visually match the same design language
- Components are reusable and consistent
- Desktop and mobile layouts remain polished
- The design system supports future scaling without redesigning everything
