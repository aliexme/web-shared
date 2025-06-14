import { defineConfig } from 'eslint/config'
// @ts-expect-error Could not find a declaration file for module 'eslint-plugin-react-native'
import eslintPluginReactNative from 'eslint-plugin-react-native'

export default defineConfig([
  {
    plugins: {
      'react-native': eslintPluginReactNative,
    },
    rules: {
      'react-native/no-unused-styles': 'error',
      'react-native/no-inline-styles': 'error',
      'react-native/no-raw-text': ['error', { skip: ['Text', 'Button'] }],
      'react-native/no-single-element-style-arrays': 'error',
    },
  },
])
