import { defineConfig } from 'eslint/config'
import eslintPluginVue from 'eslint-plugin-vue'

export default defineConfig([
  ...eslintPluginVue.configs['flat/recommended'],
  {
    name: '@aliexme/eslint-config/vue',
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
])
