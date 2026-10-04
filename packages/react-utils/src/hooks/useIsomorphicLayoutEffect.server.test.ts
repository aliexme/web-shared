// @vitest-environment node
import { useEffect } from 'react'
import { describe, expect, it } from 'vitest'

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

describe('useIsomorphicLayoutEffect', () => {
  it('should fall back to useEffect on the server', () => {
    expect(typeof window).toBe('undefined')
    expect(useIsomorphicLayoutEffect).toBe(useEffect)
  })
})
