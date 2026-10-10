import eslintReact from '@eslint-react/eslint-plugin'
import { defineConfig } from 'eslint/config'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'

export default defineConfig([
  eslintReact.configs['recommended-typescript'],
  {
    name: '@aliexme/eslint-config/react',
    files: ['**/*.ts', '**/*.mts', '**/*.cts', '**/*.tsx'],
    extends: [eslintReact.configs['recommended-type-checked']],
    rules: {
      '@eslint-react/no-unused-props': 'error',
    },
  },
  eslintPluginReactHooks.configs.flat['recommended-latest'],
  {
    rules: {
      // Duplicated by eslint-plugin-react-hooks — keep the canonical `react-hooks/*` rules
      '@eslint-react/error-boundaries': 'off',
      '@eslint-react/exhaustive-deps': 'off',
      '@eslint-react/purity': 'off',
      '@eslint-react/rules-of-hooks': 'off',
      '@eslint-react/set-state-in-effect': 'off',
      '@eslint-react/set-state-in-render': 'off',
      '@eslint-react/static-components': 'off',
      '@eslint-react/unsupported-syntax': 'off',
      '@eslint-react/use-memo': 'off',
    },
  },
])
