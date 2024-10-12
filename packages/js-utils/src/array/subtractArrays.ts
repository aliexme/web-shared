export function subtractArrays<T>(mainArray: T[], arrayToSubstract: T[], ...restArraysToSubtract: T[][]): T[] {
  if (mainArray.length === 0) return []
  if (arrayToSubstract.length === 0) return [...mainArray]

  const arraysToSubtract = [arrayToSubstract, ...restArraysToSubtract]
  const setToSubtract = new Set(arraysToSubtract.flat())
  return mainArray.filter((item) => !setToSubtract.has(item))
}
