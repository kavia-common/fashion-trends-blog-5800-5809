# Troubleshooting Common Issues

## Development

### App Doesn't Start (npm start fails)
- Ensure Node.js (v16+) and npm are installed.
- Run `npm install` to fetch dependencies.
- If port 3000 is in use, either close it or change the port via `REACT_APP_PORT=xxxx npm start`.

### Hot Reload Not Working
- Restart the development server (`npm start`).
- Clear browser cache.

## Build

### Build Fails (`npm run build`)
- Check node/npm versions.
- Remove node_modules and reinstall:  
  ```sh
  rm -rf node_modules && npm install
  ```
- For minification/compatibility errors, see [official troubleshooting](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify).

## Routing Issues after Deployment

- Make sure your static host redirects all unmatched routes to `index.html` so SPA routing works.

## Styling/UI Issues

- Ensure that CSS files have not been accidentally removed or renamed.
- If theming appears broken, clear localStorage (if future theme persistence is implemented).

## Linting/Code Warnings

- Follow ESLint feedback (if configured).
- Minor lint issues will not block running, but fixing them is recommended for maintainability.

---

_Sources: Dev scripts, common React/CSS issues, project config_
