export const asyncify = <A extends unknown[], R>(fn: (...args: A) => R): ((...args: A) => Promise<R>) => {
  return (...args) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(fn(...args)), 0)
    })
  }
}
