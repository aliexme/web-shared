export const findObjectKey = <T extends Record<string, unknown>, K extends keyof T = keyof T>(
  obj: T,
  predicate: (value: T[K]) => boolean,
): K | undefined => {
  return Object.entries(obj).find(([, value]) => predicate(value as T[K]))?.[0] as K
}
