# Styling and Theming Approach

## Overview

Styling for the Fashion Trends Blog is implemented exclusively with vanilla CSS, carefully structured to support a modern, visually appealing, and brand-aligned user experience. No UI frameworks, CSS-in-JS, or preprocessors are used, keeping style logic accessible and easy to maintain.

## CSS Organization

- All app/component styles are found in `src/App.css` (major styling and theming) and `src/index.css` (CSS reset and font family).
- CSS class names follow a modular convention, with `.navbar`, `.container`, `.post-card`, and other classes reflecting component structure.

## Color Palette and Theming

The app adheres to the prescribed brand theme:

| Purpose      | Variable Name        | Light Theme       | Dark Theme    |
|--------------|---------------------|-------------------|--------------|
| Primary      | --primary-accent    | #3b82f6           | #2563eb      |
| Success      | --success-accent    | #06b6d4           | #06b6d4      |
| Background   | --bg-app            | #f9fafb           | #16181a      |
| Surface/Card | --surface-bg        | #ffffff           | #23272d      |
| Text         | --text-main         | #111827           | #f3f8fd      |
| Border       | --border-card       | #e5e7eb           | #232727      |
| Secondary    | explicit (#64748b)  | #64748b           | #64748b      |

All palette variables are defined at the root and can be easily updated or extended if the style guide evolves.

### Defining Variables

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
  --primary-accent: #2563eb;
  --bg-app: #16181a;
  --surface-bg: #23272d;
  --text-main: #f3f8fd;
  --border-card: #232727;
}
```

### Brand and UI Alignment

- The palette matches the style guide for primary (#3b82f6), accent (#06b6d4), background, and text.
- The navigation bar and buttons use accent colors, while cards and layouts maintain minimalist, readable surfaces.

## Theming and Theme Toggle

- The default is the light theme.
- The user can toggle between light/dark themes using a fixed button at the top-right (`.theme-toggle`).
- Toggling updates a React state variable in `App`, which applies a `data-theme` attribute and changes CSS variables for immediate style updates.

## Responsive Design

- CSS grid is used for the blog previews, adapting column count to screen width.
- Media queries adjust card sizing, container padding, font sizes, and more at 900px and 600px breakpoints, ensuring layouts remain attractive and functional from large desktops down to small phones.

## Other Styling Principles

- Focus and hover effects are applied to clickable areas to improve usability and accessibility.
- Font family uses modern sans-serif stack for legibility.
- Button, card, and navigation classes are kept semantic and expressive.

## Example: Homepage Post Card

```css
.post-card {
  background: var(--surface-bg);
  border: 1px solid var(--border-card);
  border-radius: 15px;
  box-shadow: 0 2px 12px 0 rgba(59,130,246,0.03);
  display: flex;
  flex-direction: column;
  transition: transform 0.12s, box-shadow 0.12s;
}
.post-card:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 6px 22px 0 rgba(59,130,246,0.07);
}
```

## Customization and Extending

- All design tokens live as variables in `App.css`. For a new color scheme, update these tokens or add themes under new selectors.
- No outside CSS dependencies, ensuring full control over look and feel.

---

_Sources: src/App.css, style guide, styling_and_style_guide.md_
