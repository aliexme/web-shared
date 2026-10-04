import { describe, expectTypeOf, it } from 'vitest'

import type { Override } from './override'

describe('Override', () => {
  it('should combine T and U with properties of U taking precedence', () => {
    expectTypeOf<Override<{ a: 1; b: 2 }, { a: string; c: true }>>().toEqualTypeOf<{
      a: string
      b: 2
      c: true
    }>()
  })

  it('should return U when there are no overlapping properties', () => {
    expectTypeOf<Override<{ a: 1 }, { b: 2 }>>().toEqualTypeOf<{ a: 1; b: 2 }>()
  })
})
