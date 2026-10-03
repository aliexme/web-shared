# @aliexme/prettier-config

Shared Prettier configuration — a single `index.js`, no build step, published as-is.

- `prettier` is a peerDependency (`^3.0.0`); the package has no `scripts`.
- The repo root consumes it via `prettier.config.js` (dogfooding). Prettier runs only through the ESLint/Stylelint plugins here — Biome handles standalone formatting.
- Versioning/publishing via Lerna from the repo root — never edit `version` by hand.
