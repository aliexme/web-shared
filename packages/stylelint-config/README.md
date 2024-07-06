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
