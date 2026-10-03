# @aliexme/stylelint-config

Stylelint configs, shipped as raw JS — no build step; `exports` point at source files.

- Each preset lives in `configs/<name>.js` (`recommended`, `common`, `base`, `scss`, `prettier`) and is exposed as a separate export. `index.js` re-exports `configs/recommended.js`.
- `stylelint-config-standard-scss` and `stylelint-prettier` are optional peerDependencies — the `scss`/`prettier` presets require the consumer to install them.
- The repo root consumes this package in `stylelint.config.js` (dogfooding): run `pnpm check:stylelint` at the root after edits.
- Versioning/publishing via Lerna from the repo root — never edit `version` by hand.
