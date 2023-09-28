import { asyncify } from './asyncify'

export const asyncResult = <R>(fn: () => R): Promise<R> => {
  const asyncFn = asyncify(fn)
  return asyncFn()
}
