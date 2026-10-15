# @aliexme/oxlint-config

Shared oxlint configuration

## Installation

```sh
npm i --save-dev oxlint oxlint-tsgolint @aliexme/oxlint-config
```

Requires `oxlint@^1.87.0` and `oxlint-tsgolint@^7.0.2004` as (optional) peer dependencies — the latter is needed
because the config enables type-aware linting; see [Options](#options) for the escape hatch.

## Options

The plugins are pinned to the oxlint defaults plus the `import` plugin. The `correctness`, `suspicious`, `pedantic`,
`style` and `perf` categories are enabled, raised to `error`. The `restriction` category is disabled — its rules are adopted
explicitly in `rules`, keeping only the ones that earn their place. Import rules follow the same approach: the rules
enforcing the default-export style are off, the rest are on. Everything else follows the oxlint defaults.

Type-aware linting is enabled via `options.typeAware` and requires the `oxlint-tsgolint` optional peer dependency
(`^7.0.2004`): install it yourself, or override `options.typeAware` to `false` in your own config — without the package
oxlint fails hard.

## Usage

Create an `oxlint.config.ts` (one of the config files oxlint auto-discovers) and extend the shared config:

```ts
import { defineConfig } from 'oxlint'
import oxlintConfig from '@aliexme/oxlint-config'

export default defineConfig({ extends: [oxlintConfig] })
```

Package imports are not supported in the `.oxlintrc.json` format, so a JSON config cannot `extends` this
package directly — use the TS config above. `ignorePatterns` and `overrides` can be layered on top when a
project needs local tweaks:

```ts
import { defineConfig } from 'oxlint'
import oxlintConfig from '@aliexme/oxlint-config'

export default defineConfig({
  extends: [oxlintConfig],
  ignorePatterns: ['generated/**'],
})
```

## License

MIT
