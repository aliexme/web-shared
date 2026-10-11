/**
 * Returns a random item from the given array.
 *
 * @example
 *   randomArrayItem([1, 2, 3]) // 1, 2 or 3
 *
 * @param array - Array to pick from
 * @returns Random array item
 */
export const randomArrayItem = <T>(array: T[]): T => {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}
