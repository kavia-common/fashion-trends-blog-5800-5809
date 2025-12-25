# Build and Deployment Architecture

## Static Build Process

- **Build Command:**  
  To generate a production-ready, optimized static build, run:

  ```sh
  npm run build
  ```
  This creates a `build/` directory with all static assets (HTML, JS, CSS, images) required to deploy the app.

- **Build Output:**  
  The output in `build/` includes everything needed to serve the app statically—there are no runtime server or backend dependencies.

- **Optimizations:**  
  The build process via React Scripts automatically minifies code, bundles resources, and performs static asset optimization for fast initial loads on all platforms.

## Static Hosting Considerations

- **Suitable Hosts:**  
  Any platform capable of serving static files will work:
    - GitHub Pages
    - Netlify
    - Vercel
    - AWS S3 & CloudFront
    - Firebase Hosting
    - DigitalOcean App Platform
    - Traditional web servers (NGINX, Apache, etc.)

- **Deployment Steps:**  
  - Upload the entire contents of the `build/` directory to your hosting provider.
  - Follow their documentation for static/SPA React project configuration.

## SPA Routing & Host Configuration

- **Client-Side Routing:**  
  The app uses React Router and the HTML5 History API, so all navigation happens client-side.
- **Fallback to index.html:**  
  To ensure correct routing (deep links, page refreshes, or 404 fallbacks), you must configure your host to redirect all non-asset requests to `index.html`.
    - **Netlify:** Use a `_redirects` file with `/* /index.html 200`
    - **Vercel:** Add a rewrite rule in `vercel.json` or via their dashboard
    - **GitHub Pages:** Not natively SPA-friendly; see [HashRouter](https://reactrouter.com/en/main/router-components/hash-router) or static site workaround guides
    - **S3:** Set `index.html` as both the index and error document

## No Backend or Runtime Environment Required

- **Completely Static:**  
  No server, backend, or dynamic environment required beyond basic static site hosting.
- **Environment Variables:**  
  `.env` and environment variables are relevant for development only; the production build bakes in required config at build time.

## Continuous Deployment (Optional)

- You can automate deployments (CI/CD) using GitHub Actions, Netlify/Vercel integrations, or custom scripts, providing instant publishing on every code push.

## Troubleshooting Build/Deployment

- If `npm run build` fails, check Node/npm versions, ensure all dependencies are installed, and consult the [React build troubleshooting guide](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify).
- If routes don't work after deploy, double-check your host's "SPA fallback" rule.

---

_Sources: build_and_deployment.md, package.json, PRD, public README_
