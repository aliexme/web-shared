import { describe, expect, it } from 'vitest'

import { getKey } from './getKey'

describe('getKey', () => {
  it('should return suitable object key', () => {
    const obj = { key1: 'value1', key2: 'value2', key3: 'value3' } as const
    const result = getKey(obj, 'value2')

    expect(result).toBe('key2')
  })
})
