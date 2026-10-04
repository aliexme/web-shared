import type { Simplify } from '../simplify'

/**
 * Make specific properties in `T` optional, leaving the rest untouched.
 *
 * Unlike the built-in `Partial`, only the listed keys become optional.
 *
 * @template T - Object type to modify.
 * @template K - Keys of `T` to make optional.
 * @example
 * type Result = PartialProp<{ a: 1; b: 2 }, 'a'> // { a?: 1; b: 2 }
 */
export type PartialProp<T, K extends keyof T> = Simplify<
  Omit<T, K> & {
    [P in K]?: T[P]
  }
>
