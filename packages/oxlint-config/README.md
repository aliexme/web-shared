# @aliexme/oxlint-config

Shared oxlint configuration

## Installation

```sh
npm i --save-dev oxlint @aliexme/oxlint-config
```

Requires `oxlint@^1.87.0` as a peer dependency.

## Options

The `correctness`, `suspicious`, `pedantic` and `style` categories are enabled, raised to `error`. The `restriction`
category is disabled — its rules are adopted explicitly in `rules`, keeping only the ones that earn their place.
Everything else follows the oxlint defaults.

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
