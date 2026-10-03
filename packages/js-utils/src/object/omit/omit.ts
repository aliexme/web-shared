/**
 * Returns a new object without the specified properties.
 *
 * @param obj - Object to omit properties from
 * @param keys - Property key or array of keys to omit
 * @returns New object without the omitted properties
 *
 * @example
 * omit({ a: 1, b: 2, c: 3 }, 'b') // { a: 1, c: 3 }
 * omit({ a: 1, b: 2, c: 3 }, ['a', 'c']) // { b: 2 }
 */
export const omit = <T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K | K[]): Omit<T, K> => {
  const omitKeys = new Set((Array.isArray(keys) ? keys : [keys]).map(String))

  return Object.fromEntries(Object.entries(obj).filter(([key]) => !omitKeys.has(key))) as Omit<T, K>
}
