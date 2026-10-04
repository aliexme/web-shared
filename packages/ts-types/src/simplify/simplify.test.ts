import { describe, expectTypeOf, it } from 'vitest'

import type { Simplify } from './simplify'

describe('Simplify', () => {
  it('should flatten an intersection into a single object type', () => {
    expectTypeOf<Simplify<{ a: 1 } & { b: 'x' }>>().toEqualTypeOf<{ a: 1; b: 'x' }>()
  })

  it('should preserve readonly and optional modifiers', () => {
    expectTypeOf<Simplify<{ readonly a: 1 } & { b?: 'x' }>>().toEqualTypeOf<{
      readonly a: 1
      b?: 'x'
    }>()
  })
})
