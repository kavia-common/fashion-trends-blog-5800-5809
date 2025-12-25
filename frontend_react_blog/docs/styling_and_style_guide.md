# Styling Approach and Style Guide Alignment

## Color Palette

- **Primary:** `#3b82f6`
- **Accent/Success:** `#06b6d4`
- **Background:** `#f9fafb`
- **Surface:** `#ffffff`
- **Text:** `#111827`
- **Secondary Text:** `#64748b`
- Colors defined with CSS variables in `App.css` for easy theme switching.

## Light & Dark Theme

- **Default:** Light theme, as per style guide.
- **Dark:** User can switch; dark mode updates CSS custom properties accordingly (`data-theme="dark"`).

## Key Styling Features

- **Modern/Minimalist:** No external UI frameworks; only semantic elements and custom CSS.
- **Grid Layout:** Responsive CSS grid for the post previews; collapses on mobile.
- **Media Queries:** Ensure UI adapts gracefully at various breakpoints (900px, 600px).
- **Buttons, Cards, Navigation:** Custom classes, focus and hover states for interactivity and accessibility.

## Implementation

- Styles are only inside `src/App.css` and `src/index.css`.
- No CSS-in-JS or preprocessors.

## Example

```css
:root {
  --primary-accent: #3b82f6;
  --success-accent: #06b6d4;
  --bg-app: #f9fafb;
  --surface-bg: #ffffff;
  --text-main: #111827;
  --border-card: #e5e7eb;
}
```

## Alignment

All styling matches the provided brand colors and modern layout as described in the project style guide.

---

_Sources: `src/App.css`, style guide_
