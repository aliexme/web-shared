# @aliexme/stylelint-config

A set of rules for Stylelint

## Installation

```
npm i --save-dev stylelint @aliexme/stylelint-config stylelint-config-standard
```

## Usage

Extend your Stylelint config file:

```
{
  "extends": [
    "@aliexme/stylelint-config",
  ],
}
```

### SCSS

Install additional packages:

```
npm i --save-dev stylelint-config-standard-scss
```

And add the following lines to your Stylelint config file:

```
{
  "extends": [
    "@aliexme/stylelint-config",
    "@aliexme/stylelint-config/scss",
  ],
}
```

### Prettier

Install additional packages:

```
npm i --save-dev prettier stylelint-prettier
```

And add the following lines to your Stylelint config file:

```
{
  "extends": [
    "@aliexme/stylelint-config",
    "@aliexme/stylelint-config/prettier",
  ],
}
```
