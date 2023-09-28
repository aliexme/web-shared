import type { ValueOf } from '@aliexme/ts-types'

import { objectForEach } from './objectForEach'

export const omitObjectProperties = <T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K | K[],
): Omit<T, K> => {
  const result = {} as Omit<T, K>

  objectForEach(obj, ({ key, value }) => {
    const needOmit = Array.isArray(keys) ? keys.some((omitKey) => String(omitKey) === key) : String(keys) === key

    if (!needOmit) {
      result[key as Exclude<keyof T, K>] = value as ValueOf<Omit<T, K>>
    }
  })

  return result
}
