# @aliexme/eslint-config

Flat ESLint configs, shipped as raw JS — no build step; `exports` point at source files.

- Each preset lives in `configs/<name>.js`; only `.` (recommended), `./stylistic`, `./react`, `./vue` and `./astro` are exposed as `package.json` exports — the `base`, `typescript`, `import` and `package-json` presets are internal building blocks of `recommended`. New public presets need a matching `exports` entry.
- `index.js` re-exports `configs/recommended.js`; `index.d.ts` is hand-written and shared by every export via the `exports` map `types` conditions — keep it in sync.
- Framework plugins (react, vue, astro, etc.) are optional peerDependencies imported eagerly inside their presets — consumers opt in by installing them. The repo root installs all of them and composes the presets in `eslint.config.js`, which serves as the smoke test. Formatting rules conflicting with Prettier are disabled via `eslint-config-prettier/flat` imported directly in the root `eslint.config.js`.
- Changes here affect linting of this very repo (dogfooding): run `pnpm check:eslint` at the root after edits.
- Versioning/publishing via Lerna from the repo root — never edit `version` by hand.
