import { uniquify } from './uniquify'

describe('uniquify', () => {
  it('should return unique values of array', () => {
    const array = [1, 2, 1, 2, 3, 3, 3, 4]
    const result = uniquify(array)
    expect(result).toEqual([1, 2, 3, 4])
  })
})
