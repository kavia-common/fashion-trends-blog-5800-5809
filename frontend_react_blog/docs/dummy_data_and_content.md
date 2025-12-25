# Dummy Data and Content Strategy

## Approach

- All blog content is statically defined in a JavaScript array at the top of `src/App.js`.
- No API fetches, no backend, and no database.
- Structure supports title, slug (for routing), date, excerpt, image URL, and HTML content per post.

## Example Post Entry (from `src/App.js`)

```js
const posts = [
  {
    title: "Summer 2024: Vibrant Colors & Bold Prints",
    slug: "summer-2024-vibrant-colors-bold-prints",
    date: "2024-05-01",
    excerpt: "Discover the hottest colors and print trends...",
    image: "https://placehold.co/600x400/3b82f6/fff?text=Summer+2024",
    content: `<p>This summer, fashion is all about...</p>`
  },
  // ... other posts
];
```

## How It's Used

- The posts array drives both homepage previews and individual post detail pages.
- All images are served via [placehold.co](https://placehold.co/) with brand-aligned colors for realism.
- The structure is easily extended by adding new objects to the posts array.

## Why this method?

- Ensures complete staticness and instant setup.
- New posts require only a code edit; ideal for template/demonstration purposes.

---

_Sources: `src/App.js`_
