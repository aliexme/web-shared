/**
 * Returns an array of values from the main array that are not present
 * in any of the subtracted arrays.
 *
 * @param mainArray - Array to subtract from
 * @param arrayToSubtract - Array whose values are removed from the main array
 * @param restArraysToSubtract - Additional arrays whose values are removed from the main array
 * @returns Values from the main array not present in the subtracted arrays
 *
 * @example
 * difference([1, 2, 3, 4], [3, 4, 5]) // [1, 2]
 */
export function difference<T>(mainArray: T[], arrayToSubtract: T[], ...restArraysToSubtract: T[][]): T[] {
  if (mainArray.length === 0) return []
  if (arrayToSubtract.length === 0) return [...mainArray]

  const arraysToSubtract = [arrayToSubtract, ...restArraysToSubtract]
  const setToSubtract = new Set(arraysToSubtract.flat())
  return mainArray.filter((item) => !setToSubtract.has(item))
}
