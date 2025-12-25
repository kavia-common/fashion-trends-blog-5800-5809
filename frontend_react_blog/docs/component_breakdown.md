# Component Breakdown and Responsibilities

## `App` (src/App.js)
- Root of the application
- Maintains theme state and toggling logic
- Sets up routes and wraps main layout
- Renders NavBar, theme toggle, and page content

## `NavBar`
- Persistent top navigation bar with branding and links
- Uses accent coloring and sticky position

## `HomePage`
- Displays a grid of all blog post previews
- Each post links to its detail page via slug
- Grid is responsive and adapts to screen size

## `PostDetailPage`
- Shows detail view for a single blog post
- "Back to Home" button for navigation
- Handles 404 ("Post not found") with friendly fallback
- Uses `dangerouslySetInnerHTML` for static HTML content display (safe here, since content is hardcoded)

## Routing Components
- `<Routes>`, `<Route>`, `<Link>` from `react-router-dom` handle SPA page transitions

## Styles and Theming
- CSS imported in `App.js` (with media queries and data-theme variable switches for light/dark)

---

_Sources: `src/App.js`, `src/App.css`_
