import { subtractArrays } from './subtractArrays'

describe('subtractArrays', () => {
  it('should subtract one array from another', () => {
    const array1 = [1, 2, 3, 4]
    const array2 = [3, 4, 5, 6]
    const result = subtractArrays(array1, array2)
    expect(result).toEqual([1, 2])
  })

  it('should return first array if arrays have no intersection', () => {
    const array1 = [1, 2, 3, 4]
    const array2 = [5, 6, 7, 8]
    const result = subtractArrays(array1, array2)
    expect(result).toEqual([1, 2, 3, 4])
  })

  it('should return empty array if first array is empty', () => {
    const array1: number[] = []
    const array2 = [5, 6, 7, 8]
    const result = subtractArrays(array1, array2)
    expect(result).toEqual([])
  })

  it('should return first array if second array is empty', () => {
    const array1 = [1, 2, 3, 4]
    const array2: number[] = []
    const result = subtractArrays(array1, array2)
    expect(result).toEqual([1, 2, 3, 4])
  })
})
