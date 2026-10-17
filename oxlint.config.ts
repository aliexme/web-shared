import { defineConfig } from 'oxlint'
import oxlintConfig from '@aliexme/oxlint-config'
import oxlintVitestConfig from '@aliexme/oxlint-config/vitest'

export default defineConfig({
  extends: [oxlintConfig, oxlintVitestConfig],
})
