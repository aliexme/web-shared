import { describe, expect, it } from 'vitest'

import { omitUndefined } from './omitUndefined'

describe('omitUndefined', () => {
  it('should return new object without undefined values', () => {
    const obj = { key1: 1, key2: undefined, key3: '', key4: null }
    const result = omitUndefined(obj)
    expect(result).toEqual({ key1: 1, key3: '', key4: null })
  })

  it('should return empty object', () => {
    const obj = {}
    const result = omitUndefined(obj)
    expect(result).toEqual({})
  })
})
