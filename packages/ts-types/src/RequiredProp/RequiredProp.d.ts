import type { Simplify } from '../Simplify'

/**
 * Make specific properties in `T` required, leaving the rest untouched.
 *
 * Unlike the built-in `Required`, only the listed keys lose their optionality.
 *
 * @example
 *   type Result = RequiredProp<{ a?: 1; b?: 2 }, 'a'> // { a: 1; b?: 2 }
 *
 * @template T - Object type to modify.
 * @template K - Keys of `T` to make required.
 */
export type RequiredProp<T, K extends keyof T> = Simplify<
  Omit<T, K> & {
    [P in K]-?: T[P]
  }
>
