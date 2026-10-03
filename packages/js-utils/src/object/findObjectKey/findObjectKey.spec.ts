import { findObjectKey } from './findObjectKey'

describe('findObjectKey', () => {
  it('should return suitable object key', () => {
    const obj = { key1: 1, key2: undefined, key3: '', key4: null, key5: '' } as const
    const result = findObjectKey(obj, (value) => value === '')

    expect(result).toBe('key3')
  })
})
