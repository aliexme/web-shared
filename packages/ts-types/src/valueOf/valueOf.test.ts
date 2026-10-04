import { describe, expectTypeOf, it } from 'vitest'

import type { ValueOf } from './valueOf'

describe('ValueOf', () => {
  it('should extract the union of value types of an object', () => {
    expectTypeOf<ValueOf<{ a: 1; b: 'x'; c: true }>>().toEqualTypeOf<1 | 'x' | true>()
  })
})
