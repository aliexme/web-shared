# @aliexme/oxlint-config

Shared oxlint configuration

## Installation

```sh
npm i --save-dev oxlint @aliexme/oxlint-config
```

Requires `oxlint@^1.87.0` as a peer dependency.

## Options

Everything not listed here follows the oxlint defaults: only the `correctness` category is enabled.
The deliberate overrides:

| Option                    | Value                                    | oxlint default      |
| ------------------------- | ---------------------------------------- | ------------------- |
| `categories.correctness`  | `'error'`                                | `'warn'`            |
| `env`                     | `{ browser: true, node: true }`          | `{ builtin: true }` |
| `rules['no-unused-vars']` | `['error', { argsIgnorePattern: '^_' }]` | default options     |

`no-unused-vars` is kept in lockstep with `@aliexme/eslint-config` (`@typescript-eslint/no-unused-vars`
with `argsIgnorePattern: '^_'`).

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
