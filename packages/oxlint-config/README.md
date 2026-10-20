# @aliexme/oxlint-config

Shared oxlint configuration

## Installation

```sh
npm i --save-dev oxlint @aliexme/oxlint-config
```

Requires `oxlint` as a peer dependency; `oxlint-tsgolint` is an optional peer needed only
when you opt into type-aware linting — see [Options](#options).

## Options

The plugins are pinned to the oxlint defaults plus the `import` plugin. The `correctness`, `suspicious`, `pedantic`,
`style` and `perf` categories are enabled, raised to `error`. The `restriction` category is disabled — its rules are adopted
explicitly in `rules`, keeping only the ones that earn their place. Import rules follow the same approach: the rules
enforcing the default-export style are off, the rest are on. Everything else follows the oxlint defaults.

Type-aware linting is off by default. To turn it on, install the `oxlint-tsgolint` optional peer dependency
and set `options.typeAware` to `true` in your own config.

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

### Vitest

Projects using Vitest can extend the opt-in preset from `./vitest` alongside the base config:

```ts
import { defineConfig } from 'oxlint'
import oxlintConfig from '@aliexme/oxlint-config'
import oxlintVitestConfig from '@aliexme/oxlint-config/vitest'

export default defineConfig({ extends: [oxlintConfig, oxlintVitestConfig] })
```

## License

MIT
