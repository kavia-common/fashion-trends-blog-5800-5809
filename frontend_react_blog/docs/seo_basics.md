# SEO Basics for a Static React Blog

## Current Implementation

- All content is client-side rendered (CSR) via React; search engine visibility depends on crawler JS support.
- Page titles and metadata are static (not dynamically updated per route).

## Recommended SEO Steps

- **Custom Index.html:** Ensure `public/index.html` (not shown here) has a descriptive `<title>`, meta description, and OpenGraph tags.
- **Content Structure:** Use semantic tags (`<main>`, `<article>`, headings) for clarity.
- **Alt Text:** All images use meaningful `alt` attributes.
- **SPA Routing & SEO:** By default, client-side routing is less SEO-friendly; for critical SEO, consider SSR frameworks or prerendering (out-of-scope for pure static Create React App).

## Suggestions for Improvement

- Integrate [react-helmet](https://github.com/nfl/react-helmet) for per-route `<title>` and meta tags in future updates.
- Consider static export/SSG or SSR for optimal SEO (e.g., Gatsby, Next.js) if required.

## Sitemap

- For static sites, upload a `sitemap.xml` if supported by host.

## Social Sharing

- Enhance `index.html` with proper OG/Twitter meta tags.

---

_Sources: Review of app features, React SPA SEO recommendations_
