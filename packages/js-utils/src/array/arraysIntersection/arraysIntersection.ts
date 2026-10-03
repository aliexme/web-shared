/**
 * @deprecated Superseded by the native `Set.prototype.intersection` (ES2025).
 * For two arrays: `[...new Set(a).intersection(new Set(b))]`
 */
export function arraysIntersection<T>(array1: T[], array2: T[], ...restArrays: T[][]): T[] {
  const intersectionSet = [array2, ...restArrays].reduce(
    (set, array) => set.intersection(new Set(array)),
    new Set(array1),
  )

  return [...intersectionSet]
}
