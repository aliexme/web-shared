import { describe, expectTypeOf, it } from 'vitest'

import type { Tuple } from './tuple'

describe('Tuple', () => {
  it('should create a tuple of the given length', () => {
    expectTypeOf<Tuple<string, 3>>().toEqualTypeOf<[string, string, string]>()
  })

  it('should create an empty tuple for zero length', () => {
    expectTypeOf<Tuple<string, 0>>().toEqualTypeOf<[]>()
  })

  it('should fall back to an array for a non-literal length', () => {
    expectTypeOf<Tuple<string, number>>().toEqualTypeOf<string[]>()
  })

  it('should reject a non-numeric length', () => {
    // @ts-expect-error '3' is not a number
    expectTypeOf<Tuple<string, '3'>>().toEqualTypeOf<never>()
  })
})
