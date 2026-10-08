import { defineConfig } from 'eslint/config'

import baseConfig from './base.js'
import importConfig from './import.js'
import packageJsonConfig from './package-json.js'
import typescriptConfig from './typescript.js'

export default defineConfig([baseConfig, typescriptConfig, importConfig, packageJsonConfig])
