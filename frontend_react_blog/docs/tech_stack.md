# Tech Stack and Dependencies

## Main Technologies

- **React (18.x):** Core UI library for building all components and templates.
- **react-router-dom (6.x):** SPA routing for navigation between homepage and individual post pages.
- **CSS Modules:** All styling is handled with vanilla CSS (in `App.css`), no UI frameworks or preprocessors.
- **React Scripts:** Used for local development, builds, and testing.

## Dependency List (as in `package.json`)

| Package           | Version    | Purpose                                  |
|-------------------|------------|------------------------------------------|
| `react`           | ^18.2.0    | Building UI components                   |
| `react-dom`       | ^18.2.0    | DOM rendering for React                  |
| `react-router-dom`| ^6.22.3    | SPA routing/navigation                   |
| `react-scripts`   | ^5.0.1     | Development/build tooling                |
| `cross-env`       | ^7.0.3     | Development env var support (dev only)   |

**No third-party design systems, state managers, or backend dependencies.**

## Why this stack?

- **Minimal:** Focuses on core React and CSS for simplicity and maintainability.
- **SPA Routing:** Enables fast, reload-free transitions between pages/posts.
- **Static Friendly:** Generates a bundle perfect for static hosting.

---

_Sources: `package.json`_
