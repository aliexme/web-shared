import { describe, expectTypeOf, it } from 'vitest'

import type { PartialProp } from './partialProp'

describe('PartialProp', () => {
  it('should make only the specified properties optional', () => {
    expectTypeOf<PartialProp<{ a: 1; b: 2 }, 'a'>>().toEqualTypeOf<{ a?: 1; b: 2 }>()
  })

  it('should preserve readonly and optional modifiers of untouched properties', () => {
    expectTypeOf<PartialProp<{ a: 1; readonly b: 2; c?: 3 }, 'a'>>().toEqualTypeOf<{
      a?: 1
      readonly b: 2
      c?: 3
    }>()
  })

  it('should reject keys not present in T', () => {
    // @ts-expect-error 'z' is not a key of { a: 1 }
    expectTypeOf<PartialProp<{ a: 1 }, 'z'>>().toEqualTypeOf<{ a: 1 }>()
  })
})
