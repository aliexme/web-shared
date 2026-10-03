import { randomNumber } from '../randomNumber'

/**
 * Returns a random integer in the inclusive range from `min` to `max`.
 *
 * @param min - Lower bound (inclusive, default 0)
 * @param max - Upper bound (inclusive, default 999999)
 * @returns Random integer
 *
 * @example
 * randomInt(1, 6) // 1, 2, 3, 4, 5 or 6
 */
export const randomInt = (min = 0, max = 999_999): number => {
  return randomNumber(min, max, { precision: 0 })
}
