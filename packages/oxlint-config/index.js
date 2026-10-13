import { defineConfig } from 'oxlint'

export default defineConfig({
  plugins: ['eslint', 'typescript', 'unicorn', 'oxc'],
  categories: { correctness: 'error', suspicious: 'error', pedantic: 'error' },
  rules: {
    // pedantic
    'max-lines-per-function': 'allow',
    'no-negated-condition': 'allow',
    'unicorn/no-negated-condition': 'allow',
    'unicorn/prefer-math-trunc': 'allow',
  },
})
