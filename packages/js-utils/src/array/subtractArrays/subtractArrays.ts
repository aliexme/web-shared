/**
 * @deprecated Superseded by the native `Set.prototype.difference` (ES2025).
 * For arrays without duplicates: `[...new Set(a).difference(new Set(b))]`;
 * exact equivalent: `a.filter((item) => !new Set(b).has(item))`
 */
export function subtractArrays<T>(mainArray: T[], arrayToSubstract: T[], ...restArraysToSubtract: T[][]): T[] {
  if (mainArray.length === 0) return []
  if (arrayToSubstract.length === 0) return [...mainArray]

  const arraysToSubtract = [arrayToSubstract, ...restArraysToSubtract]
  const setToSubtract = new Set(arraysToSubtract.flat())
  return mainArray.filter((item) => !setToSubtract.has(item))
}
