import { describe, expect, it } from 'vitest'

import { findKey } from './findKey'

describe('findKey', () => {
  it('should return suitable object key', () => {
    const obj = { key1: 1, key2: undefined, key3: '', key4: null, key5: '' } as const
    const result = findKey(obj, (value) => value === '')

    expect(result).toBe('key3')
  })
})
