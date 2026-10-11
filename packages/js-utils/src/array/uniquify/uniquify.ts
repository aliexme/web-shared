/**
 * Returns an array of unique values from the given array.
 *
 * @example
 *   uniquify([1, 2, 2, 3]) // [1, 2, 3]
 *
 * @param array - Array to deduplicate
 * @returns New array without duplicates
 */
export const uniquify = <T>(array: T[]): T[] => {
  return [...new Set(array)]
}
