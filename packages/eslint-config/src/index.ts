import type { Linter } from 'eslint'

import recommendedConfigArray from './configs/recommended.js'

export default recommendedConfigArray satisfies Linter.Config[]
