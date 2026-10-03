/**
 * Returns an array of unique values that are present in every given array.
 *
 * @param array1 - First array
 * @param array2 - Second array
 * @param restArrays - Additional arrays to intersect with
 * @returns Values present in all arrays, in order of the first array
 *
 * @example
 * intersection([1, 2, 3, 4], [3, 4, 5]) // [3, 4]
 */
export function intersection<T>(array1: T[], array2: T[], ...restArrays: T[][]): T[] {
  const intersectionSet = [array2, ...restArrays].reduce(
    (set, array) => set.intersection(new Set(array)),
    new Set(array1),
  )

  return [...intersectionSet]
}
