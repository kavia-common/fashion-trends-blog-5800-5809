# Accessibility and Responsiveness

## Accessibility Considerations

- **Semantic HTML:** Uses native semantic elements (`<nav>`, `<main>`, `<article>`, etc.) for structure.
- **Color Contrast:** All text and interaction elements meet accessibility color contrast guidelines for both light & dark themes.
- **Keyboard Navigation:** All interactive elements (`<a>`, `<button>`, etc.) are keyboard-navigable.
- **ARIA Labels:** Theme toggle includes `aria-label` for clarity with assistive technologies.
- **Focus & Hover States:** Clearly visible via CSS; helps keyboard and screen reader users.

## Responsiveness

- **Mobile-First Styles:** Uses CSS grid and flex layouts to enable smooth resizing.
- **Media Queries:** App adapts for tablets and mobiles (600px/900px breakpoints in `App.css`).
- **Adaptive Images:** All images are set to scale responsively (`object-fit: cover`, fixed/max widths).

## Manual Checks

- Use browser tab ordering to ensure navigation is logical.
- Test color-blind modes and contrast.
- Use [axe](https://www.deque.com/axe/) or [Lighthouse](https://developers.google.com/web/tools/lighthouse) browser extensions for further audit.

---

_Sources: `src/App.js`, `src/App.css`, accessibility review_
