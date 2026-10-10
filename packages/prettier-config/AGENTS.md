# @aliexme/prettier-config

Shared Prettier configuration — a single `index.js`, no build step, published as-is.

- `prettier` is a peerDependency (`^3.0.0`); the package has no `scripts`.
- The repo root consumes it via `prettier.config.js` (dogfooding): `check:prettier`/`fix:prettier` remain as manual scripts — oxfmt (`@aliexme/oxfmt-config`) replaced Prettier in `pnpm check`/`pnpm fix` and the pre-commit hook. Biome keeps formatting JS/TS/JSON/CSS in lockstep with this config.
- Versioning/publishing via Lerna from the repo root — never edit `version` by hand.
