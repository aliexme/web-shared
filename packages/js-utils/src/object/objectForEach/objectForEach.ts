import type { ValueOf } from '@aliexme/ts-types'

/**
 * @deprecated Superseded by the native `Object.entries` iteration (ES2017).
 * Use `Object.entries(obj).forEach(([key, value]) => ...)` or a
 * `for (const [key, value] of Object.entries(obj))` loop instead
 */
export const objectForEach = <T extends Record<string, unknown>>(
  obj: T,
  callbackFn: (entry: { key: keyof T; value: ValueOf<T> }) => void,
): void => {
  Object.keys(obj).forEach((key) => {
    const value = obj[key] as ValueOf<T>
    callbackFn({ key, value })
  })
}
