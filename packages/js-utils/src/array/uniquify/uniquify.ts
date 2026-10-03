/**
 * Returns an array of unique values from the given array.
 *
 * @param array - Array to deduplicate
 * @returns New array without duplicates
 *
 * @example
 * uniquify([1, 2, 2, 3]) // [1, 2, 3]
 */
export const uniquify = <T>(array: T[]): T[] => {
  return [...new Set(array)]
}
