import { describe, expectTypeOf, it } from 'vitest'

import type { Tuple } from './tuple'

describe('Tuple', () => {
  it('should create a tuple of the given length', () => {
    expectTypeOf<Tuple<string, 3>>().toEqualTypeOf<[string, string, string]>()
  })

  it('should create an empty tuple for zero length', () => {
    expectTypeOf<Tuple<string, 0>>().toEqualTypeOf<[]>()
  })
})
