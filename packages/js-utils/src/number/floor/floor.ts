/**
 * Rounds a value down to the given precision.
 *
 * @example
 *   floor(1.239, 2) // 1.23
 *
 * @param value - Value to round down
 * @param precision - Number of decimal places (default 0)
 * @returns Rounded down value
 */
export const floor = (value: number, precision = 0): number => {
  return Math.floor(value * 10 ** precision) / 10 ** precision
}
