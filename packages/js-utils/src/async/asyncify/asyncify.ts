/**
 * @deprecated Superseded by the native `Promise.try` (ES2025), which also
 * catches synchronously thrown errors. Use `Promise.try(fn)` or
 * `Promise.resolve().then(fn)` instead
 */
export const asyncify = <A extends unknown[], R>(fn: (...args: A) => R): ((...args: A) => Promise<R>) => {
  return (...args) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(fn(...args)), 0)
    })
  }
}
