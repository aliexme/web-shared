import { defineConfig, mergeConfig, type UserConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { externalizeDeps } from 'vite-plugin-externalize-deps'

const defaultLibConfig = defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['es', 'cjs'],
      fileName(format, entryName) {
        const extension = format === 'cjs' ? 'cjs' : 'js'
        return `${entryName}.${extension}`
      },
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: './src',
      },
    },
  },
  plugins: [
    dts({
      tsconfigPath: './tsconfig.build.json',
      entryRoot: './src',
      insertTypesEntry: true,
    }),
    externalizeDeps(),
  ],
})

export const defineLibConfig = (config: UserConfig = {}): UserConfig => {
  return mergeConfig(defaultLibConfig, config)
}
