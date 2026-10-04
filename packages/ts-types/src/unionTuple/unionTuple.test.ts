import { describe, expectTypeOf, it } from 'vitest'

import type { UnionTuple } from './unionTuple'

describe('UnionTuple', () => {
  it('should convert a union of literals into a tuple', () => {
    // The resulting order is deterministic but not part of the contract —
    // it mirrors the reversed union member order of the compiler
    expectTypeOf<UnionTuple<'a' | 1 | true>>().toEqualTypeOf<[true, 1, 'a']>()
  })

  it('should convert a union of objects into a tuple', () => {
    expectTypeOf<UnionTuple<{ a: 1 } | { b: 2 }>>().toEqualTypeOf<[{ a: 1 }, { b: 2 }]>()
  })

  it('should return an empty tuple for never', () => {
    expectTypeOf<UnionTuple<never>>().toEqualTypeOf<[]>()
  })
})
