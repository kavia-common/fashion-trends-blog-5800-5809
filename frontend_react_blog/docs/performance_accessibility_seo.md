# Performance, Accessibility, and SEO

## Performance Considerations

- **Minimal Bundle:** By choosing React and React Router as the only dependencies and not using a UI framework, the bundle remains small and fast-loading.
- **Static Data:** No API calls or dynamic requests mean instant page responsiveness.
- **CSS Only:** All styling is handled with static CSS files, reducing the render-blocking overhead.

## Accessibility

- **Semantic HTML:** Utilizes elements (`<nav>`, `<main>`, `<article>`, etc.) for clear page structure.
- **Color Contrast:** Follows WCAG guidelines for both light and dark themes.
- **Keyboard Navigation:** All interactive elements (links, buttons) are keyboard accessible.
- **ARIA Labels:** Applied for navigational clarity (e.g., theme toggle uses `aria-label`).
- **Focus & Hover:** Styles highlight focus for keyboard and screen readers.

## SEO Strategies

- **Semantic Structure:** Layout and content use appropriate heading and section tags.
- **Alt Text:** All images are provided with descriptive alt attributes.
- **Meta Tags:** The main HTML includes a descriptive title and meta information.
- **SPA Limitation:** As a client-side SPA, deep SEO is limited—major search engines still index, but for advanced SEO, SSG/SSR frameworks (e.g., Gatsby/Next.js) are recommended in the future.

## Further Performance/Accessibility Tips

- Test with tools like [Lighthouse](https://developers.google.com/web/tools/lighthouse) and [axe](https://www.deque.com/axe/).
- Optimize image sizes and compression when not using placeholder images.

---

_Sources: accessibility_and_responsiveness.md, seo_basics.md, src/App.js, App.css_
