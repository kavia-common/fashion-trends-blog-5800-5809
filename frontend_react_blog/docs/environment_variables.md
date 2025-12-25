# Environment Variables

## Defined Environment Variables

The `.env` file (or project environment config) provides for several potential environment variables:

- `REACT_APP_API_BASE`
- `REACT_APP_BACKEND_URL`
- `REACT_APP_FRONTEND_URL`
- `REACT_APP_WS_URL`
- `REACT_APP_NODE_ENV`
- `REACT_APP_NEXT_TELEMETRY_DISABLED`
- `REACT_APP_ENABLE_SOURCE_MAPS`
- `REACT_APP_PORT`
- `REACT_APP_TRUST_PROXY`
- `REACT_APP_LOG_LEVEL`
- `REACT_APP_HEALTHCHECK_PATH`
- `REACT_APP_FEATURE_FLAGS`
- `REACT_APP_EXPERIMENTS_ENABLED`

## Relevance for This App

- **Not actively required or used:** The Fashion Trends Blog app is 100% static and requires no API or dynamic config, so none of these variables are consumed at runtime by the app code.
- **Source Map & NODE_ENV:** Used internally during build/deployment for optimization (typical of Create React App).
- **Port:** Development preview defaults to port 3000.
- **Safe Defaults:** All builds work even if .env is missing or most variables are empty.

## Summary

Feel free to ignore or remove these environment variables unless extending the project to require them (for backend/API integration, real-time data, feature toggling, etc).

---

_Sources: Requested container environment list, code review (`src/App.js`, etc.)_
