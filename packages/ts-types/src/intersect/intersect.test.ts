import { describe, expectTypeOf, it } from 'vitest'

import type { Intersect } from './intersect'

describe('Intersect', () => {
  it('should convert a union of objects into an intersection', () => {
    expectTypeOf<Intersect<{ a: 1 } | { b: 2 }>>().toEqualTypeOf<{ a: 1 } & { b: 2 }>()
  })

  it('should keep a non-union type as is', () => {
    expectTypeOf<Intersect<{ a: 1 }>>().toEqualTypeOf<{ a: 1 }>()
  })
})
