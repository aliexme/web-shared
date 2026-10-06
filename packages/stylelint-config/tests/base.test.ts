// @vitest-environment node
import { fileURLToPath } from 'node:url'
import stylelint from 'stylelint'
import { describe, expect, it } from 'vitest'

const lintCss = async (code: string) => {
  const { results } = await stylelint.lint({
    code,
    config: { extends: [fileURLToPath(new URL('../configs/base.js', import.meta.url))] },
  })

  return results[0].warnings.map((warning) => warning.rule)
}

const validCss = `@import url('./theme.css');

@source './src/**/*.vue';

@custom-variant hocus (&:hover, &:focus);

@theme {
  --color-brand: oklch(0.5 0.1 30);
}

@utility tab-4 {
  tab-size: 4;
}

.cardWrapper {
  color: var(--color-brand);

  @apply p-4;
}

.page :global(.active) {
  outline: none;
}
`

describe('base preset', () => {
  it('accepts valid CSS with Tailwind v4 at-rules', async () => {
    await expect(lintCss(validCss)).resolves.toEqual([])
  })

  it('rejects unknown at-rules', async () => {
    await expect(lintCss('@unknown-thing value;')).resolves.toContain('at-rule-no-unknown')
  })

  it('rejects class names not matching the pattern', async () => {
    await expect(lintCss('.BadClass { color: red; }')).resolves.toContain('selector-class-pattern')
  })

  it('rejects malformed layer names', async () => {
    await expect(lintCss('@layer a-.b { .a { color: red; } }')).resolves.toContain('layer-name-pattern')
  })
})
