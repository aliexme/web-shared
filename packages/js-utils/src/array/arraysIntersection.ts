export const arraysIntersection = <T>(array1: T[], array2: T[], ...arrays: T[][]): T[] => {
  if (array1.length === 0 || array2.length === 0 || arrays.some((array) => array.length === 0)) return []

  let intersection: T[] = array1.filter((item) => array2.includes(item))

  arrays.forEach((arrayN) => {
    intersection = intersection.filter((item) => arrayN.includes(item))
  })

  return intersection
}
