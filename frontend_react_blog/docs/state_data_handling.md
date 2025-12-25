# State and Data Handling

## Static Data Approach

- **Source:** All blog post content is statically defined in a constant JavaScript array (`posts`) at the top of `App.js`.
- **Data Structure:** Each blog post object includes `title`, `slug`, `date`, `excerpt`, `image`, and full HTML `content`.
- **No API/Backend:** No fetching, no remote calls, and no external persistence. The SPA does not connect to any backend or service.

## Data Flow

- The `posts` array is accessible to all relevant components (HomePage, PostDetailPage).
- **HomePage:** Maps over the `posts` array to render each preview card.
- **PostDetailPage:** Looks up a post by `slug` (from URL), renders detail or 404 if not found.
- **Props Usage:** Minimal, as HomePage and PostDetailPage access shared `posts` variable directly due to the static, non-changing nature of the data.

## State Management

- **Global State:** Only the theme (light/dark) uses React state via `useState` in the `App` component.
- **Component State:** No local state needed in child components; content is static and deterministic.

## Extensibility

- To add/edit posts: update the `posts` array in `App.js`.
- Structure is intentionally flat to maximize clarity and minimize code complexity.

## Justification

- Static data maximizes deployability, load speed, and reliability.
- For demonstration/template use, this approach avoids complexity and risk.
- Future upgrades (CMS, API, markdown import) are facilitated by the isolated data definition.

---

_Sources: src/App.js, dummy_data_and_content.md_
