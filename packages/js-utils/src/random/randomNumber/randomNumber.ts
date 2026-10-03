import { floor } from '../../number/floor'

/** Options for the randomNumber function */
export interface RandomNumberOptions {
  /** Number of decimal places in the result (default 2) */
  precision?: number
}

/**
 * Returns a random number in the inclusive range from `min` to `max`.
 *
 * @param min - Lower bound (inclusive, default 0)
 * @param max - Upper bound (inclusive, default 999999)
 * @param options - Random number options
 * @returns Random number
 *
 * @example
 * randomNumber(0, 1) // e.g. 0.42
 */
export const randomNumber = (min = 0, max = 999_999, options: RandomNumberOptions = {}): number => {
  const { precision = 2 } = options

  // 10 ** -precision widens the span so that max is inclusive
  // (for precision 0 it is the classic +1 of the integer formula)
  return floor(Math.random() * (max - min + 10 ** -precision), precision) + min
}
