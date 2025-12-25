# Features and User Experience Flow

## Homepage

- Displays a grid of blog post previews with title, summary, image, and date.
- Each preview is clickable and navigates to the respective individual post page.
- Top navigation bar provides brand identity and a Home link, persistent throughout the app.

## Individual Post Pages

- Each post page shows title, image, publication date, and the full blog content in a clean, readable layout.
- A "Back to Home" button returns the user to the main post grid.

## Navigation & Routing

- Navigation between homepage and post pages is instant and dynamic (no page reloads), leveraging React Router.
- Non-existent routes are handled gracefully with a custom 404 page.

## UX Flows

1. **User arrives on homepage:** Sees all posts in a responsive grid.
2. **Clicks a post:** Navigates to individual post with detailed content.
3. **Browses posts or clicks "Back to Home":** Returns to main grid.
4. **Theme toggle:** User can switch between light and dark themes with a persistent toggle button (top right).

## Accessibility, Styling & Interactivity

- Large, clickable card areas enhance touch and mouse usability.
- Responsive design ensures mobile, tablet, and desktop friendliness.
- Posts and buttons have clear focus and hover states for feedback.
- Colors and contrast adhere to light theme guidelines.

---

_Sources: `src/App.js`, `src/App.css`_
