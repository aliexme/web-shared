import eslint from '@eslint/js'
import { defineConfig } from 'eslint/config'
import globals from 'globals'

export default defineConfig([
  eslint.configs.recommended,
  {
    name: '@aliexme/eslint-config/base',
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2025,
      },
    },
    rules: {
      'no-constant-condition': ['error', { checkLoops: false }],
      'no-useless-rename': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'no-new-object': 'error',
      'object-shorthand': 'error',
      'prefer-object-spread': 'error',
      'no-array-constructor': 'error',
      'array-callback-return': ['error', { checkForEach: true }],
      'prefer-destructuring': ['error', { array: false, object: true }, { enforceForRenamedProperties: false }],
      'prefer-template': 'error',
      'no-eval': 'error',
      'no-loop-func': 'error',
      'prefer-rest-params': 'error',
      'default-param-last': 'error',
      'no-new-func': 'error',
      'no-param-reassign': ['error', { props: true }],
      'prefer-spread': 'error',
      'prefer-arrow-callback': 'error',
      'no-empty-function': 'error',
      'no-useless-constructor': 'error',
      'dot-notation': 'error',
      'one-var': ['error', 'never'],
      'no-multi-assign': 'error',
      eqeqeq: 'error',
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
      'no-nested-ternary': 'error',
      'no-new-wrappers': 'error',
      radix: ['error', 'as-needed'],
      'id-length': [
        'error',
        {
          min: 2,
          exceptions: ['_', 'i', 'e'],
          exceptionPatterns: ['[x-z]'],
        },
      ],
      'new-cap': ['error', { newIsCap: true, capIsNew: false }],
      'no-restricted-globals': [
        'error',
        {
          name: 'isNaN',
          message: 'Use Number.isNaN instead.',
        },
        {
          name: 'isFinite',
          message: 'Use Number.isFinite instead.',
        },
      ],
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],
      'no-console': 'warn',
    },
  },
])
