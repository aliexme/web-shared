import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { includeIgnoreFile } from '@eslint/compat'
import stylisticMigratePlugin from '@stylistic/eslint-plugin-migrate'

import eslintConfigRecommended from '@aliexme/eslint-config'
import eslintConfigReact from '@aliexme/eslint-config/react'
import eslintConfigReactNative from '@aliexme/eslint-config/react-native'
import eslintConfigVue from '@aliexme/eslint-config/vue'
import eslintConfigPrettier from '@aliexme/eslint-config/prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, '.gitignore')

/** @type {import('typescript-eslint').ConfigArray} */
export default [
  includeIgnoreFile(gitignorePath),
  ...eslintConfigRecommended,
  ...eslintConfigReact,
  ...eslintConfigReactNative,
  ...eslintConfigVue,
  ...eslintConfigPrettier,
  {
    plugins: {
      '@stylistic/migrate': stylisticMigratePlugin,
    },
    rules: {
      '@stylistic/migrate/migrate': 'off',
    },
  },
]
