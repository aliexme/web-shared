/**
 * Returns the key of the first object value that satisfies the predicate.
 *
 * @param obj - Object to search in
 * @param predicate - Function that returns true for the matching value
 * @returns Key of the first matching value, or undefined if none matches
 *
 * @example
 * findKey({ a: 1, b: 2, c: 3 }, (value) => value > 1) // 'b'
 */
export const findKey = <T extends Record<string, unknown>, K extends keyof T = keyof T>(
  obj: T,
  predicate: (value: T[K]) => boolean,
): K | undefined => {
  return Object.entries(obj).find(([, value]) => predicate(value as T[K]))?.[0] as K
}
