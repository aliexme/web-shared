export function arraysIntersection<T>(array1: T[], array2: T[], ...restArrays: T[][]): T[] {
  if (array1.length === 0 || array2.length === 0 || restArrays.some((array) => array.length === 0)) return []

  const intersectionSet = new Set(array1)
  const arrays = [array2, ...restArrays]

  for (const array of arrays) {
    for (const item of intersectionSet) {
      if (!array.includes(item)) {
        intersectionSet.delete(item)
      }
    }
  }

  return Array.from(intersectionSet)
}
