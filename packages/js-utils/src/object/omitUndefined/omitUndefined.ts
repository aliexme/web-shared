/**
 * Returns a new object without properties whose values are undefined.
 *
 * @example
 *   omitUndefined({ a: 1, b: undefined, c: 3 }) // { a: 1, c: 3 }
 *
 * @param obj - Object to omit undefined values from
 * @returns New object without undefined-valued properties
 */
export const omitUndefined = <T extends Record<string, unknown>>(obj: T): T => {
  return Object.fromEntries(Object.entries(obj).filter(([, value]) => value !== undefined)) as T
}
