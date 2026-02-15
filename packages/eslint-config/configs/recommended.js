import { defineConfig } from 'eslint/config'

import baseConfig from './base.js'
import importConfig from './import.js'
import packageJsonConfig from './package-json.js'
import stylisticConfig from './stylistic.js'
import typescriptConfig from './typescript.js'

export default defineConfig([baseConfig, typescriptConfig, stylisticConfig, importConfig, packageJsonConfig])
