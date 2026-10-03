# @aliexme/ts-types

Common TypeScript utility types. The whole package is a single `index.d.ts` — no build step, published as-is.

- Edit only `index.d.ts`; `exports`/`files` point straight at it.
- Verify with `pnpm check:ts` (here or from the repo root).
- `typescript` is a peerDependency (`^6.0.0`) — do not add it to `dependencies`.
- Versioning/publishing via Lerna from the repo root — never edit `version` by hand.
