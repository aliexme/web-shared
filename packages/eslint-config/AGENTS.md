# @aliexme/eslint-config

Flat ESLint configs, shipped as raw JS — no build step; `exports` point at source files.

- Each preset lives in `configs/<name>.js` and is exposed as a separate export (`./recommended`, `./base`, `./typescript`, `./stylistic`, `./import`, `./package-json`, `./react`, `./vue`, `./astro`). New presets need a matching entry in `package.json` `exports`.
- `index.js` re-exports `configs/recommended.js`; `index.d.ts` is hand-written and shared by every export via the `exports` map `types` conditions — keep it in sync.
- Framework plugins (react, vue, astro, etc.) are optional peerDependencies imported eagerly inside their presets — consumers opt in by installing them. The repo root installs all of them and composes the presets in `eslint.config.js`, which serves as the smoke test. Prettier runs through `eslint-plugin-prettier/recommended` imported directly in the root `eslint.config.js`.
- Changes here affect linting of this very repo (dogfooding): run `pnpm check:eslint` at the root after edits.
- Versioning/publishing via Lerna from the repo root — never edit `version` by hand.
