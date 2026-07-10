# 05. Motion Specification

## Objective
Motion should reinforce quality and guide attention. Every animation must feel intentional, smooth, and lightweight.

## Opening Experience
### Terminal Loader
- Fullscreen black background.
- JetBrains Mono font.
- Typing animation simulating a real terminal.
- Display build steps such as loading components, optimizing SEO, and deployment.
- Blinking cursor.
- Duration: approximately 2–3 seconds.
- Finish with 'Ready in x.xs' then shrink the terminal and reveal the homepage.

## Page Transition
- Fade + slight upward movement.
- Do not flash a white screen.
- Preserve scroll performance.

## Navbar
- Transparent at the top.
- On scroll: glassmorphism, blur, reduced height.
- Smooth transition around 250–300ms.

## Hero
- Headline enters with staggered words.
- Subtitle fades in.
- CTA buttons slide upward.
- Browser mockup floats gently.
- Background aurora moves slowly.

## Mouse Effects
- Spotlight follows cursor on desktop.
- Interactive cards respond with subtle tilt.

## Buttons
- Hover: lift 2–4px.
- Soft blue glow.
- Magnetic interaction for primary CTA.
- Ripple feedback on click.

## Cards
- Elevate on hover.
- Increase shadow slightly.
- Border glow for active elements.

## Portfolio
- Image zoom on hover.
- Technology badges fade in.
- Action buttons appear smoothly.

## Pricing Cards
- Highlight 'Most Popular' package.
- Hover enlarges card slightly.
- CTA gains stronger glow.

## FAQ
- Accordion expands smoothly.
- Height animation should not jump.

## Mobile Menu
- Slide in from the right.
- Dark blurred overlay.
- Menu items appear with staggered animation.
- Language toggle remains visible beside the hamburger icon.

## Performance Rules
- Respect reduced-motion preferences.
- Avoid blocking rendering.
- Use hardware-accelerated transforms.
- Keep animations smooth at 60 FPS where possible.

## Libraries
- GSAP for timelines.
- Framer Motion for UI interactions.
- Lenis for smooth scrolling.

## Acceptance Criteria
- Animations feel premium.
- No excessive motion.
- Fast on desktop and mobile.
- Motion improves usability rather than distracting from content.
