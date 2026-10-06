// @vitest-environment node
import { fileURLToPath } from 'node:url'
import stylelint from 'stylelint'
import { describe, expect, it } from 'vitest'

const lintScss = async (code: string) => {
  const { results } = await stylelint.lint({
    code,
    config: { extends: [fileURLToPath(new URL('../configs/scss.js', import.meta.url))] },
    customSyntax: 'postcss-scss',
  })

  return results[0].warnings.map((warning) => warning.rule)
}

const validScss = `@use './mixins';
@reference 'tailwindcss';

$gap: 1rem;

@mixin card {
  padding: $gap;
}

.cardScss {
  color: oklch(0.5 0.1 30);

  @include card;
  @apply p-4;
}
`

describe('scss preset', () => {
  it('accepts valid SCSS with Tailwind v4 at-rules', async () => {
    await expect(lintScss(validScss)).resolves.toEqual([])
  })

  it('rejects unknown at-rules', async () => {
    await expect(lintScss('@tailwindx utilities;')).resolves.toContain('scss/at-rule-no-unknown')
  })

  it('rejects class names not matching the pattern', async () => {
    await expect(lintScss('.BadClass { color: red; }')).resolves.toContain('selector-class-pattern')
  })
})
