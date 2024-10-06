import baseConfigArray from './base.js'
import typescriptConfigArray from './typescript.js'
import stylisticConfigArray from './stylistic.js'
import importConfigArray from './import.js'

/** @type {import('eslint').Linter.Config[]} */
export default [...baseConfigArray, ...typescriptConfigArray, ...stylisticConfigArray, ...importConfigArray]
