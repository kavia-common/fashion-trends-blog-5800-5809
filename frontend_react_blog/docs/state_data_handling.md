# State and Data Handling

## Static Data Definition

- **All blog post data is defined statically** in a constant JavaScript array (`posts`) at the top of `src/App.js`.
- Each object in the array contains:
  - `title`
  - `slug`
  - `date`
  - `excerpt`
  - `image` (URL, typically a placeholder)
  - `content` (HTML for the full post body)

This approach eliminates the need for APIs, backends, or databases, making the application extremely fast and simplifying deploys and updates.

## Data Flow Between Components

- The `posts` array is defined outside any component so it can be accessed by both `HomePage` and `PostDetailPage` directly.
- **HomePage**: Maps through `posts` to show previews for each post.
- **PostDetailPage**: Uses the `slug` from the router params to look up and render the matching post in detail.
- No data is fetched or modified at runtime.
- Components do not receive complex props (such as callback handlers or state updaters). Instead, all components access the static array as needed.

## State Management

- **Global State**: The only global state is the current theme (light or dark), managed with a `useState` hook in the `App` component.
  - The theme value is toggled by a button and updates CSS variables for theming.
- **Local State**: There is no per-component or local React state in child components, given all other content is static.
- **Navigation State**: Current route/slug is managed automatically by React Router DOM.

## Why This Approach?

- **Simplicity**: Makes it trivial for others to edit or extend the blog. New posts, edits, and ordering are just a code change.
- **Performance**: Avoids all network delay and caching worries.
- **Demo Value**: Shows a clear separation between concerns and serves as an archetype for static prototypes, templates, or minimal-content sites.

## Extending the Pattern

- To make the data dynamic (e.g., loading from a backend, markdown files, or CMS), the `posts` array can be replaced with an async fetch and/or context/provider pattern. For now, absolute staticness maximizes speed and reliability for demonstrative and template use.

---

_Sources: src/App.js, dummy_data_and_content.md_
