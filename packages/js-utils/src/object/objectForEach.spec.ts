import { noop } from '../function'
import { objectForEach } from './objectForEach'

describe('objectForEach', () => {
  it('should return undefined', () => {
    const obj = { key1: 1 }
    const result = objectForEach(obj, noop)
    expect(result).toBeUndefined()
  })

  it('should call callbackFn with { key, value } pairs', () => {
    const obj = { key1: 1, key2: 2 }
    const mockCallback = jest.fn(noop)
    objectForEach(obj, mockCallback)
    expect(mockCallback).toHaveBeenNthCalledWith(1, { key: 'key1', value: 1 })
    expect(mockCallback).toHaveBeenNthCalledWith(2, { key: 'key2', value: 2 })
  })
})
