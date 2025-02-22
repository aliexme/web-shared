import eslintPluginVue from 'eslint-plugin-vue'

/** @type {import('eslint').Linter.Config[]} */
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
]
