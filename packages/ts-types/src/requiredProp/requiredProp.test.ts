import { describe, expectTypeOf, it } from 'vitest'

import type { RequiredProp } from './requiredProp'

describe('RequiredProp', () => {
  it('should make only the specified properties required', () => {
    expectTypeOf<RequiredProp<{ a?: 1; b?: 2 }, 'a'>>().toEqualTypeOf<{ a: 1; b?: 2 }>()
  })

  it('should keep already required properties intact', () => {
    expectTypeOf<RequiredProp<{ a: 1; b?: 2 }, 'a'>>().toEqualTypeOf<{ a: 1; b?: 2 }>()
  })

  it('should reject keys not present in T', () => {
    // @ts-expect-error 'z' is not a key of { a: 1 }
    expectTypeOf<RequiredProp<{ a: 1 }, 'z'>>().toEqualTypeOf<{ a: 1 }>()
  })
})
