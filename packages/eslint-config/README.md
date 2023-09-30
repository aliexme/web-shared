# @aliexme/eslint-config

Rule set for ESLint

## Installation

```
npm i --save-dev eslint @aliexme/eslint-config eslint-plugin-import
```

## Usage

Extend your ESLint config file:

```
{
  "extends": [
    "@aliexme/eslint-config",
  ],
}
```

### Typescript

To check ts-files, install additional packages:

```
npm i --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

And add the following lines to your ESLint config file:

```
{
  "extends": [
    "@aliexme/eslint-config",
    "@aliexme/eslint-config/typescript",
  ],
}
```

### React

Install additional packages:

```
npm i --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

And add the following lines to your ESLint config file:

```
{
  "extends": [
    "@aliexme/eslint-config",
    "@aliexme/eslint-config/react",
    "plugin:react-hooks/recommended",
  ],
}
```

### React Native

Install additional packages:

```
npm i --save-dev eslint-plugin-react-native
```

And add the following lines to your ESLint config file:

```
{
  "extends": [
    "@aliexme/eslint-config",
    "@aliexme/eslint-config/react-native",
  ],
}
```

### Prettier

Install additional packages:

```
npm i --save-dev prettier eslint-plugin-prettier eslint-config-prettier
```

And add the following lines to your ESLint config file:

```
{
  "extends": [
    "@aliexme/eslint-config",
    "@aliexme/eslint-config/prettier",
  ],
}
```
