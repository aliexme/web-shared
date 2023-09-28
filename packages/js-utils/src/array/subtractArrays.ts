export const subtractArrays = <T>(array1: T[], array2: T[]): T[] => {
  if (array1.length === 0 || array2.length === 0) return array1
  return array1.filter((item) => !array2.includes(item))
}
