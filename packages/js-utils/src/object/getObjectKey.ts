import { findObjectKey } from './findObjectKey'

export const getObjectKey = <T extends Record<string, unknown>, K extends keyof T = keyof T>(
  obj: T,
  value: T[K],
): K => {
  return findObjectKey(obj, (objValue) => objValue === value) as K
}
