import { defineConfig } from 'oxlint'

export default defineConfig({
  plugins: ['eslint', 'typescript', 'unicorn', 'oxc'],
  categories: { correctness: 'error', suspicious: 'error', pedantic: 'error', style: 'error' },
  rules: {
    /* pedantic */
    'max-lines-per-function': 'off',
    'no-negated-condition': 'off',
    'unicorn/no-negated-condition': 'off',
    'unicorn/prefer-math-trunc': 'off',

    /* style */
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'one-var': ['error', 'never'],
    'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
    'arrow-body-style': 'off',
    'capitalized-comments': 'off',
    'id-length': 'off',
    'init-declarations': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'no-magic-numbers': 'off',
    'no-ternary': 'off',
    'sort-keys': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/no-null': 'off',
    'unicorn/number-literal-case': 'off',
    'unicorn/prefer-global-this': 'off',
  },
})
