# Styling and Theming Approach

## Styling Approach

- **CSS Only:** All styling resides in `src/App.css` and `src/index.css`. No pre-processors (SASS/LESS) or CSS-in-JS.
- **Modularity:** Naming conventions and class structure match component boundaries (e.g., `.navbar`, `.post-card`, `.theme-toggle`).

## Theming

- **Default Theme:** Light mode, aligned with the project style guide.
- **Theme Support:** Users may toggle between Light and Dark themes via a dedicated button in the UI.
- **Implementation:** CSS custom properties (variables) are set on the `:root` selector and toggled with `data-theme` on the HTML element.

### Key Theme Variables

```css
:root {
  --primary-accent: #3b82f6;
  --success-accent: #06b6d4;
  --bg-app: #f9fafb;
  --surface-bg: #ffffff;
  --text-main: #111827;
  --border-card: #e5e7eb;
}
[data-theme="dark"] {
  --primary-accent: #2563eb;   /* Darker blue */
  --bg-app: #16181a;
  --surface-bg: #23272d;
  --text-main: #f3f8fd;
  --border-card: #232727;
}
```

- **Theme Toggles:** The toggle button in `App` switches the React state variable, triggering an effect that updates `data-theme` and variables on the HTML element accordingly.

## Layout and Responsive Design

- **Grid Layout:** Post previews on the homepage use CSS grid for multi-column display, gracefully collapsing on smaller screens.
- **Media Queries:** Responsive breakpoints at 900px and 600px adapt containers, font sizes, and grid columns for mobile/tablet/desktop.

## Color Palette (per Style Guide)

| Name         | Hex Code   | Usage                     |
|--------------|------------|---------------------------|
| Primary      | #3b82f6    | Accent, links, brand      |
| Success      | #06b6d4    | Secondary accent, hover   |
| Background   | #f9fafb    | App/page background       |
| Surface      | #ffffff    | Cards, nav, overlays      |
| Text Main    | #111827    | Primary text              |
| Secondary    | #64748b    | Dates, less prominent txt |

## Branding

All styling respects the modern, minimalist look described in the documentation and style guide.

---

_Sources: src/App.css, styling_and_style_guide.md, style guide section in README_
