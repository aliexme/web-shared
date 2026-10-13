import { defineConfig } from 'oxlint'

export default defineConfig({
  plugins: ['eslint', 'typescript', 'unicorn', 'oxc'],
  categories: { correctness: 'error' },
  env: { browser: true, node: true },
  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
})
