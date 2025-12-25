# Build and Deployment Architecture

## Static Build Process

- **Build Command:** Run `npm run build` to produce a fully static, production-ready version of the app in `/build`.
- **What the Build Contains:** Minified JS bundle, static HTML, media assets, and CSS, all ready for direct hosting.

## Static Hosting Compatibility

- **Compatible Hosts:** GitHub Pages, Netlify, Vercel, Firebase Hosting, AWS S3/CloudFront, and any other static site provider.
- **Deployment Step:** Upload the contents of the `/build` directory to your host.

## SPA Routing Configuration

- Because the app uses client-side routing (React Router + HTML5 History API), static hosts must redirect all unmatched routes to `index.html` so deep links and refreshes work.
  - For Netlify/Vercel: add a `_redirects` file or equivalent rule.
  - For other hosts (e.g., S3): enable error/page routing to `index.html`.

## Hosting and Environment

- **No Server-Side Code:** Pure frontend; no server runtime, API layer, or dynamic SSR.
- **Environment Variables:** Supported in development for convenience, but not needed for the statically built output. Build is robust if no `.env` present.

## Continuous Deployment

- Static hosting allows instant redeployment on code changes, with near-zero downtime.

---

_Sources: build_and_deployment.md, package.json, PRD.md_
