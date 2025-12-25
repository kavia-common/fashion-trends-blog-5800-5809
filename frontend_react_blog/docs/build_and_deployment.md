# Build and Deployment Guidance

## Production Build

To create an optimized production build:

```sh
npm run build
```

- Output will be in the `build/` directory.
- Includes minification, bundling, and all assets in static form.

## Static Hosting

The built app is 100% static and may be deployed to:

- **GitHub Pages**
- **Vercel / Netlify**
- **Firebase Hosting**
- **AWS S3 + CloudFront**
- **Any other static site host**

Upload the entire contents of the `build/` folder to your hosting provider per their deployment documentation.

## Notes

- SPA routing uses the HTML5 History API, so hosting config must redirect all unmatched routes to `index.html` (for Netlify, Vercel, etc. use `/_redirects` or equivalent).
- No server-side code is required or supported.

## Troubleshooting Build

- If `npm run build` fails due to minification, refer to [this guide](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify).

---

_Sources: `package.json`, React Scripts, public project README_
