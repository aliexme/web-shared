/**
 * @deprecated Superseded by the native `Set.prototype.difference` (ES2025).
 * For two arrays: `new Set(a).difference(new Set(b))`
 */
export function subtractArrays<T>(mainArray: T[], arrayToSubstract: T[], ...restArraysToSubtract: T[][]): T[] {
  if (mainArray.length === 0) return []
  if (arrayToSubstract.length === 0) return [...mainArray]

  const arraysToSubtract = [arrayToSubstract, ...restArraysToSubtract]
  const setToSubtract = new Set(arraysToSubtract.flat())
  return mainArray.filter((item) => !setToSubtract.has(item))
}
