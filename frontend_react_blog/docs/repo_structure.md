# Repository Structure and Key Files

## Directory Layout

```
frontend_react_blog/
├── README.md
├── docs/
│   └── ...           # Documentation files (this folder)
├── package.json      # Project dependencies and scripts
├── eslint.config.mjs # ESLint config for JS/React linting
├── src/
│   ├── App.js        # Main app component (routing, layout, data)
│   ├── App.css       # App-wide CSS and component styles
│   ├── index.js      # App entry point, renders <App />
│   ├── index.css     # CSS reset and global base styles
│   ├── App.test.js   # Basic test template (sample only)
│   └── setupTests.js # Jest DOM test setup
└── post_process_status.lock # (Internal build tool file)

```

## Key Files

- **`src/App.js`:** Root app logic, routing, navbar, homepage, post detail, theme toggling, blog data.
- **`src/App.css`:** All major styling, color variables, layout, media queries, theme rules.
- **`src/index.js`:** App bootstrapping and rendering (ReactDOM).
- **`src/index.css`:** Resets & base font styles.
- **`package.json`:** Project metadata, scripts, dependencies.
- **`eslint.config.mjs`:** Configures code linting for project style and best practices.

**No backend directory, database models, or API/service layers: the application is 100% static frontend.**

---

_Sources: Directory structure, `package.json`, `src/` files_
