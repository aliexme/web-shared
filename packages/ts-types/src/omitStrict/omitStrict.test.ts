import { describe, expectTypeOf, it } from 'vitest'

import type { OmitStrict } from './omitStrict'

describe('OmitStrict', () => {
  it('should remove only the specified keys', () => {
    expectTypeOf<OmitStrict<{ a: 1; b: 2; c: 3 }, 'a' | 'c'>>().toEqualTypeOf<{ b: 2 }>()
  })

  it('should reject keys not present in T', () => {
    // @ts-expect-error 'z' is not a key of { a: 1; b: 2 }
    expectTypeOf<OmitStrict<{ a: 1; b: 2 }, 'z'>>().toEqualTypeOf<{ a: 1 }>()
  })
})
