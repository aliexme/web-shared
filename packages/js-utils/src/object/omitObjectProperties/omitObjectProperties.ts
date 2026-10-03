export const omitObjectProperties = <T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K | K[],
): Omit<T, K> => {
  const omitKeys = new Set((Array.isArray(keys) ? keys : [keys]).map(String))

  return Object.fromEntries(Object.entries(obj).filter(([key]) => !omitKeys.has(key))) as Omit<T, K>
}
