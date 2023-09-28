import { omitObjectProperties } from './omitObjectProperties'

describe('omitObjectProperties', () => {
  it('should return new object without specific property', () => {
    const obj = { key1: 1, key2: undefined, key3: '', key4: null }
    const result = omitObjectProperties(obj, 'key2')

    expect(result).toEqual({ key1: 1, key3: '', key4: null })
  })

  it('should return new object without specific properties', () => {
    const obj = { key1: 1, key2: undefined, key3: '', key4: null }
    const result = omitObjectProperties(obj, ['key1', 'key3'])

    expect(result).toEqual({ key2: undefined, key4: null })
  })

  it('should return new object without specific not string properties', () => {
    const obj = { 1: 1, 2: 2 }
    const result = omitObjectProperties(obj, 1)

    expect(result).toEqual({ 2: 2 })
  })
})
