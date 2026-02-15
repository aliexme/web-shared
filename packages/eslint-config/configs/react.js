import { defineConfig } from 'eslint/config'
// @ts-expect-error Could not find a declaration file for module 'eslint-plugin-react/configs/jsx-runtime.js'
import eslintPluginReactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js'
// @ts-expect-error Could not find a declaration file for module 'eslint-plugin-react/configs/recommended.js'
import eslintPluginReactRecommended from 'eslint-plugin-react/configs/recommended.js'
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
