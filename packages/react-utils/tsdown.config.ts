import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  format: 'esm',
  platform: 'browser',
  unbundle: true,
  exports: true,
  sourcemap: true,
})
