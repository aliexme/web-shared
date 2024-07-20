import type { Linter } from 'eslint'

import baseConfigArray from './base.js'
import typescriptConfigArray from './typescript.js'
import stylisticConfigArray from './stylistic.js'
import importConfigArray from './import.js'

export default [
  ...baseConfigArray,
  ...typescriptConfigArray,
  ...stylisticConfigArray,
  ...importConfigArray,
] satisfies Linter.FlatConfig[]
