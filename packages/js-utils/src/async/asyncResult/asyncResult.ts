import { asyncify } from '../asyncify'

/**
 * @deprecated Superseded by the native `Promise.try` (ES2025), which also
 * catches synchronously thrown errors. Use `Promise.try(fn)` instead
 */
export const asyncResult = <R>(fn: () => R): Promise<R> => {
  const asyncFn = asyncify(fn)
  return asyncFn()
}
