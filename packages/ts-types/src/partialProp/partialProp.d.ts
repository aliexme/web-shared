import type { Simplify } from '../simplify'

/**
 * Make specific properties in T optional
 */
export type PartialProp<T, K extends keyof T> = Simplify<
  Omit<T, K> & {
    [P in K]?: T[P]
  }
>
