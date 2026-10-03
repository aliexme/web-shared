import { findKey } from '../findKey'

/**
 * Returns the key of the first object value equal to the given value.
 *
 * @param obj - Object to search in
 * @param value - Value to find
 * @returns Key of the first matching value
 *
 * @example
 * getKey({ a: 1, b: 2, c: 3 }, 2) // 'b'
 */
export const getKey = <T extends Record<string, unknown>, K extends keyof T = keyof T>(obj: T, value: T[K]): K => {
  return findKey(obj, (objValue) => objValue === value) as K
}
