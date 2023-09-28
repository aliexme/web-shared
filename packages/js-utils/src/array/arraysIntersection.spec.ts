import { arraysIntersection } from './arraysIntersection'

describe('arraysIntersection', () => {
  it('should return intersection of two arrays', () => {
    const array1 = [1, 2, 3, 4]
    const array2 = [3, 4, 5, 6]
    const result = arraysIntersection(array1, array2)
    expect(result).toEqual([3, 4])
  })

  it('should return intersection of three arrays', () => {
    const array1 = [1, 2, 3, 4]
    const array2 = [2, 3, 4, 5]
    const array3 = [3, 4, 5, 6]
    const result = arraysIntersection(array1, array2, array3)
    expect(result).toEqual([3, 4])
  })

  it('should return empty array if arrays have no intersection', () => {
    const array1 = [1, 2, 3, 4]
    const array2 = [5, 6, 7, 8]
    const result = arraysIntersection(array1, array2)
    expect(result).toEqual([])
  })

  it('should return empty array if at least one of arrays is empty', () => {
    const array1 = [1, 2, 3, 4]
    const array2 = [5, 6, 7, 8]
    const result = arraysIntersection(array1, array2, [])
    expect(result).toEqual([])
  })
})
