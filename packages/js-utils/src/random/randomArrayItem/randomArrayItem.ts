/**
 * Returns a random item from the given array.
 *
 * @param array - Array to pick from
 * @returns Random array item
 *
 * @example
 * randomArrayItem([1, 2, 3]) // 1, 2 or 3
 */
export const randomArrayItem = <T>(array: T[]): T => {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}
