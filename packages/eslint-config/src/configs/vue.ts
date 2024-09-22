import type { Linter } from 'eslint'
// @ts-expect-error Could not find a declaration file for module 'eslint-plugin-vue'
import eslintPluginVue from 'eslint-plugin-vue'

export default [
  ...eslintPluginVue.configs['flat/recommended'],
  {
    languageOptions: {
      parserOptions: {
        extraFileExtensions: ['.vue'],
      },
    },
    rules: {
      'vue/no-undef-components': 'error',
      'vue/prop-name-casing': 'off',
      'vue/no-reserved-props': 'off',
    },
  },
] satisfies Linter.Config[]
