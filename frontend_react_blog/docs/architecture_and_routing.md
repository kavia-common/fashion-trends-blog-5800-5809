# Architecture and Routing Design

## App Structure

The application is a classic SPA with all major logic in a single `App.js` root and `src/` folder.

- **Top-level Components:** `App`, `NavBar`, `HomePage`, `PostDetailPage`
- **Routing:** Managed with `react-router-dom`, enabling client-side transitions.

## Routing Structure

| Route                 | Rendered Component       | Description                                   |
|-----------------------|-------------------------|-----------------------------------------------|
| `/`                   | `HomePage`              | Displays a grid of all post summaries         |
| `/post/:slug`         | `PostDetailPage`        | Shows full content for a specific blog post   |
| Any other path        | 404 Fallback            | Custom "Not found" message                    |

- Navigation uses `<Link>` components to provide SPA-like UX with no full reloads.
- Dynamic segments, like `:slug`, allow for scalable blog post mapping.

## Data Flow

- Post data is imported/declared at the top of `App.js` as a constant array.
- Components access this data directly for display (no external fetch/API).

## Theming and State

- App supports both light and dark themes, defaulting to light as per style guide.
- Theme toggling is managed with React state and updates CSS variables at runtime.

---

_Sources: `src/App.js`, `src/App.css`_
