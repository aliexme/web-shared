# @aliexme/stylelint-config

A set of rules for Stylelint

## Installation

```sh
npm i --save-dev stylelint @aliexme/stylelint-config
```

## Usage

Extend your Stylelint config file:

```json
{
  "extends": [
    "@aliexme/stylelint-config",
  ],
}
```

## Available configs

| Export | Description |
| --- | --- |
| `@aliexme/stylelint-config` (or `/recommended`) | Extends `/base` |
| `@aliexme/stylelint-config/base` | `stylelint-config-standard` + shared rule tweaks + Tailwind CSS at-rules support |
| `@aliexme/stylelint-config/scss` | SCSS support via `stylelint-config-standard-scss` + the same shared rule tweaks and Tailwind CSS at-rules support |
| `@aliexme/stylelint-config/prettier` | Runs Prettier through Stylelint |

### SCSS

Install additional packages:

```sh
npm i --save-dev stylelint-config-standard-scss
```

And add the following lines to your Stylelint config file:

```json
{
  "extends": [
    "@aliexme/stylelint-config",
    "@aliexme/stylelint-config/scss",
  ],
}
```

### Prettier

Install additional packages:

```sh
npm i --save-dev prettier stylelint-prettier
```

And add the following lines to your Stylelint config file:

```json
{
  "extends": [
    "@aliexme/stylelint-config",
    "@aliexme/stylelint-config/prettier",
  ],
}
```

## License

MIT
