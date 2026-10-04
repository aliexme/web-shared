import type { Simplify } from '../simplify'

/**
 * Make specific properties in T required
 */
export type RequiredProp<T, K extends keyof T> = Simplify<
  Omit<T, K> & {
    [P in K]-?: T[P]
  }
>
