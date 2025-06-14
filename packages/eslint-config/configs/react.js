import { defineConfig } from 'eslint/config'
// @ts-expect-error Could not find a declaration file for module 'eslint-plugin-react/configs/recommended.js'
import eslintPluginReactRecommended from 'eslint-plugin-react/configs/recommended.js'
// @ts-expect-error Could not find a declaration file for module 'eslint-plugin-react/configs/jsx-runtime.js'
import eslintPluginReactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'

export default defineConfig([
  eslintPluginReactRecommended,
  eslintPluginReactJsxRuntime,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/jsx-tag-spacing': [
        'error',
        {
          closingSlash: 'never',
          beforeSelfClosing: 'proportional-always',
          afterOpening: 'never',
          beforeClosing: 'never',
        },
      ],
      'react/jsx-max-props-per-line': ['error', { when: 'multiline' }],
      'react/jsx-curly-spacing': ['error', { when: 'never', children: true }],
      'react/jsx-curly-brace-presence': ['error', 'never'],
      'react/jsx-closing-bracket-location': 'error',
      'react/self-closing-comp': 'error',
      'react/no-unused-prop-types': 'error',
    },
  },
  {
    files: ['**/*.{tsx}'],
    rules: {
      'react/prop-types': 'off',
    },
  },
  {
    plugins: {
      'react-hooks': eslintPluginReactHooks,
    },
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
    },
  },
])
