import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { includeIgnoreFile } from '@eslint/compat'

import eslintConfigRecommended from '@aliexme/eslint-config'
import eslintConfigReact from '@aliexme/eslint-config/react'
import eslintConfigReactNative from '@aliexme/eslint-config/react-native'
import eslintConfigPrettier from '@aliexme/eslint-config/prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, '.gitignore')

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  includeIgnoreFile(gitignorePath),
  ...eslintConfigRecommended,
  ...eslintConfigReact,
  ...eslintConfigReactNative,
  ...eslintConfigPrettier,
]
