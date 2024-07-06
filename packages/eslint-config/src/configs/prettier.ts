import type { Linter } from 'eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [eslintPluginPrettierRecommended] satisfies Linter.FlatConfig[]
