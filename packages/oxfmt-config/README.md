# @aliexme/oxfmt-config

Shared oxfmt configuration

## Installation

```sh
npm i --save-dev oxfmt @aliexme/oxfmt-config
```

Requires `oxfmt@^0.72.0` as a peer dependency.

## Options

Everything not listed here follows the oxfmt defaults, which mostly match Prettier's. The deliberate
overrides:

| Option        | Value   | oxfmt default |
| ------------- | ------- | ------------- |
| `printWidth`  | `120`   | `100`         |
| `semi`        | `false` | `true`        |
| `singleQuote` | `true`  | `false`       |

## Usage

Create an `oxfmt.config.ts` (one of the file names oxfmt auto-discovers) and re-export the config:

```ts
import oxfmtConfig from '@aliexme/oxfmt-config'

export default oxfmtConfig
```

`ignorePatterns` and `overrides` from `import('oxfmt').Oxfmtrc` can be layered on top when a project
needs local tweaks:

```ts
import oxfmtConfig from '@aliexme/oxfmt-config'

export default {
  ...oxfmtConfig,
  ignorePatterns: ['generated/**'],
}
```

## License

MIT
