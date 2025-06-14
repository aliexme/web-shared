import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from 'eslint/config'
import { includeIgnoreFile } from '@eslint/compat'
import stylisticMigratePlugin from '@stylistic/eslint-plugin-migrate'
import eslintConfigRecommended from '@aliexme/eslint-config'
import eslintConfigReact from '@aliexme/eslint-config/react'
import eslintConfigReactNative from '@aliexme/eslint-config/react-native'
import eslintConfigVue from '@aliexme/eslint-config/vue'
import eslintConfigAstro from '@aliexme/eslint-config/astro'
import eslintConfigPrettier from '@aliexme/eslint-config/prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, '.gitignore')

export default defineConfig([
  includeIgnoreFile(gitignorePath),
  eslintConfigRecommended,
  eslintConfigReact,
  eslintConfigReactNative,
  eslintConfigVue,
  eslintConfigAstro,
  eslintConfigPrettier,
  {
    plugins: {
      // @ts-expect-error stylisticMigratePlugin is not assignable to type 'Plugin'
      '@stylistic/migrate': stylisticMigratePlugin,
    },
    rules: {
      '@stylistic/migrate/migrate': 'error',
    },
  },
])
