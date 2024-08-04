import type { Linter } from 'eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  eslintPluginPrettierRecommended,
  {
    rules: {
      // Disable @stylistic rules
      '@stylistic/block-spacing': 'off',
      '@stylistic/brace-style': 'off',
      '@stylistic/comma-dangle': 'off',
      '@stylistic/comma-spacing': 'off',
      '@stylistic/func-call-spacing': 'off',
      '@stylistic/function-paren-newline': 'off',
      '@stylistic/indent': 'off',
      '@stylistic/jsx-child-element-spacing': 'off',
      '@stylistic/jsx-closing-bracket-location': 'off',
      '@stylistic/jsx-closing-tag-location': 'off',
      '@stylistic/jsx-curly-newline': 'off',
      '@stylistic/jsx-curly-spacing': 'off',
      '@stylistic/jsx-equals-spacing': 'off',
      '@stylistic/jsx-first-prop-new-line': 'off',
      '@stylistic/jsx-indent': 'off',
      '@stylistic/jsx-indent-props': 'off',
      '@stylistic/jsx-max-props-per-line': 'off',
      '@stylistic/jsx-newline': 'off',
      '@stylistic/jsx-one-expression-per-line': 'off',
      '@stylistic/jsx-props-no-multi-spaces': 'off',
      '@stylistic/jsx-tag-spacing': 'off',
      '@stylistic/jsx-wrap-multilines': 'off',
      '@stylistic/key-spacing': 'off',
      '@stylistic/keyword-spacing': 'off',
      '@stylistic/lines-around-comment': 'off',
      '@stylistic/max-len': 'off',
      '@stylistic/member-delimiter-style': 'off',
      '@stylistic/no-extra-parens': 'off',
      '@stylistic/no-extra-semi': 'off',
      '@stylistic/object-curly-spacing': 'off',
      '@stylistic/operator-linebreak': 'off',
      '@stylistic/quotes': 'off',
      '@stylistic/semi': 'off',
      '@stylistic/space-before-blocks': 'off',
      '@stylistic/space-before-function-paren': 'off',
      '@stylistic/space-infix-ops': 'off',
      '@stylistic/type-annotation-spacing': 'off',
    },
  },
] satisfies Linter.FlatConfig[]
