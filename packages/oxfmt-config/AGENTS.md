# @aliexme/oxfmt-config

Shared oxfmt configuration — a single `index.js`, no build step, published as-is.

- `oxfmt` is a peerDependency (`^0.72.0`); the package has no `scripts`.
- Formatting options are kept in lockstep with `@aliexme/prettier-config` and `@aliexme/biome-config` (line width 120, no semicolons, single quotes). `sortPackageJson` is explicitly disabled: oxfmt's sorting algorithm is not compatible with the other formatters and would fight them over `package.json` files.
- oxfmt auto-discovers only `.oxfmtrc.json`, `.oxfmtrc.jsonc`, `oxfmt.config.ts` and `oxfmt.config.mts` — a JS module cannot be a root config, so consumers re-export this package from `oxfmt.config.ts`. There is no auto-discovered `.oxfmtignore`: by default oxfmt reads `.gitignore` (plus `.prettierignore` for compat); per-project ignores go into `ignorePatterns` or a dedicated ignore file passed via `--ignore-path`.
- The repo root consumes it via `oxfmt.config.ts` (dogfooding): `check:oxfmt`/`fix:oxfmt` plus the pre-commit format job; oxfmt replaced Prettier in `pnpm check`/`pnpm fix` (the prettier scripts remain as manual escape hatches).
- Versioning/publishing via Lerna from the repo root — never edit `version` by hand.
