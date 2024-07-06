import type { Linter } from 'eslint'
import tseslint from 'typescript-eslint'

export default tseslint.config(...tseslint.configs.strict, ...tseslint.configs.stylistic, {
  name: '@aliexme/eslint-config/typescript',
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'enumMember',
        format: ['UPPER_CASE', 'PascalCase'],
      },
    ],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: { delimiter: 'none' },
        singleline: { delimiter: 'comma' },
      },
    ],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
    ],
    '@typescript-eslint/type-annotation-spacing': 'error',
  },
}) as Linter.FlatConfig[]
