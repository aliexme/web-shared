import path from 'node:path'
import { fileURLToPath } from 'node:url'
import stylisticMigratePlugin from '@stylistic/eslint-plugin-migrate'
import { defineConfig, includeIgnoreFile } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import eslintConfigRecommended from '@aliexme/eslint-config'
import eslintConfigAstro from '@aliexme/eslint-config/astro'
import eslintConfigReact from '@aliexme/eslint-config/react'
import eslintConfigVue from '@aliexme/eslint-config/vue'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, '.gitignore')

export default defineConfig([
  includeIgnoreFile(gitignorePath),
  eslintConfigRecommended,
  eslintConfigReact,
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
