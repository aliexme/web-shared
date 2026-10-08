import { defineConfig } from 'eslint/config'
// @ts-expect-error Could not find a declaration file for module 'eslint-plugin-react/configs/jsx-runtime.js'
import eslintPluginReactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js'
// @ts-expect-error Could not find a declaration file for module 'eslint-plugin-react/configs/recommended.js'
import eslintPluginReactRecommended from 'eslint-plugin-react/configs/recommended.js'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'

export default defineConfig([
  eslintPluginReactRecommended,
  eslintPluginReactJsxRuntime,
  eslintPluginReactHooks.configs.flat['recommended-latest'],
  {
    name: '@aliexme/eslint-config/react',
    settings: {
      react: {
        // 'detect' crashes on ESLint 10: eslint-plugin-react 7.37.5 calls the removed context.getFilename()
        version: '19',
      },
    },
    rules: {
      'react/self-closing-comp': 'error',
      'react/no-unused-prop-types': 'error',
    },
  },
  {
    name: '@aliexme/eslint-config/react/tsx',
    files: ['**/*.tsx'],
    rules: {
      'react/prop-types': 'off',
    },
  },
])
