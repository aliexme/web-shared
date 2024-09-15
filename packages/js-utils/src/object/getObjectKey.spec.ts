import { getObjectKey } from './getObjectKey'

describe('getObjectKey', () => {
  it('should return suitable object key', () => {
    const obj = { key1: 'value1', key2: 'value2', key3: 'value3' } as const
    const result = getObjectKey(obj, 'value2')

    expect(result).toBe('key2')
  })
})
