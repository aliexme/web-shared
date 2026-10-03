/**
 * Rounds a value to the given precision.
 *
 * @param value - Value to round
 * @param precision - Number of decimal places (default 0)
 * @returns Rounded value
 *
 * @example
 * round(1.236, 2) // 1.24
 */
export const round = (value: number, precision = 0): number => {
  return Math.round(value * 10 ** precision) / 10 ** precision
}
