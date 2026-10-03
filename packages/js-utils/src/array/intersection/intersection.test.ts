import { describe, expect, it } from 'vitest'

import { intersection } from './intersection'

describe('intersection', () => {
  it('should return intersection of two arrays', () => {
    const array1 = [1, 2, 3, 4]
    const array2 = [3, 4, 5, 6]
    const result = intersection(array1, array2)
    expect(result).toEqual([3, 4])
  })

  it('should return intersection of three arrays', () => {
    const array1 = [1, 2, 3, 4]
    const array2 = [2, 3, 4, 5]
    const array3 = [3, 4, 5, 6]
    const result = intersection(array1, array2, array3)
    expect(result).toEqual([3, 4])
  })

  it('should return empty array if arrays have no intersection', () => {
    const array1 = [1, 2, 3, 4]
    const array2 = [5, 6, 7, 8]
    const result = intersection(array1, array2)
    expect(result).toEqual([])
  })

  it('should return empty array if first or second array is empty', () => {
    const array1 = [1, 2, 3, 4]
    const array3 = [5, 6, 7, 8]
    const result = intersection(array1, [], array3)
    expect(result).toEqual([])
  })

  it('should return empty array if at least one of arrays is empty', () => {
    const array1 = [1, 2, 3, 4]
    const array2 = [5, 6, 7, 8]
    const result = intersection(array1, array2, [])
    expect(result).toEqual([])
  })

  it('should deduplicate items from the first array', () => {
    const result = intersection([1, 2, 2, 3, 3], [2, 3, 4])
    expect(result).toEqual([2, 3])
  })

  it('should preserve order of the first array', () => {
    const result = intersection([4, 1, 3, 2], [2, 3, 4, 5])
    expect(result).toEqual([4, 3, 2])
  })
})
