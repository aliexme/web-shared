# @aliexme/stylelint-config

Stylelint configs, shipped as raw JS — no build step; `exports` point at source files.

- Public presets live in `configs/<name>.js` (`recommended`, `base`, `scss`), each exposed as a separate export; `index.js` re-exports `configs/recommended.js`. `configs/common.js` (rule tweaks shared by `base` and `scss`) and `configs/tailwind.js` are internal — not listed in `exports`.
- `configs/tailwind.js` holds the shared list of Tailwind CSS at-rules ignored by the `base` and `scss` presets — extend it, don't duplicate the list.
- Smoke tests live in `tests/<preset>.test.ts` (one file per preset) and run Stylelint over inline fixtures through the root Vitest config (`pnpm test` from the root; `postcss-scss` is a root devDependency for them).
- `stylelint-config-standard-scss` is an optional peerDependency — the `scss` preset requires the consumer to install it.
- The repo root consumes this package in `stylelint.config.js` (dogfooding): run `pnpm check:stylelint` at the root after edits.
- Versioning/publishing via Lerna from the repo root — never edit `version` by hand.
