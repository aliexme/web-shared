import tseslint from 'typescript-eslint'

export default /** @type {import('eslint').Linter.Config[]} */ (
  tseslint.config(...tseslint.configs.strict, ...tseslint.configs.stylistic, {
    name: '@aliexme/eslint-config/typescript',
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        projectService: true,
      },
    },
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
          singleline: { delimiter: 'semi' },
        },
      ],
      '@typescript-eslint/no-empty-object-type': [
        'error',
        {
          allowInterfaces: 'with-single-extends',
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
      '@typescript-eslint/type-annotation-spacing': 'error',
    },
  })
)