import type { ValueOf } from '@aliexme/ts-types'

export const objectForEach = <T extends Record<string, unknown>>(
  obj: T,
  callbackFn: (entry: { key: keyof T; value: ValueOf<T> }) => void,
): void => {
  Object.keys(obj).forEach((key) => {
    const value = obj[key] as ValueOf<T>
    callbackFn({ key, value })
  })
}
