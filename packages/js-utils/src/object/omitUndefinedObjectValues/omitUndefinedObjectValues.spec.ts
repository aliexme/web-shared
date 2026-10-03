import { omitUndefinedObjectValues } from './omitUndefinedObjectValues'

describe('omitUndefinedObjectValues', () => {
  it('should return new object without undefined values', () => {
    const obj = { key1: 1, key2: undefined, key3: '', key4: null }
    const result = omitUndefinedObjectValues(obj)
    expect(result).toEqual({ key1: 1, key3: '', key4: null })
  })

  it('should return empty object', () => {
    const obj = {}
    const result = omitUndefinedObjectValues(obj)
    expect(result).toEqual({})
  })
})
