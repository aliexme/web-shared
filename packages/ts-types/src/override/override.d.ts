import type { Simplify } from '../simplify'

/**
 * Combine T and U and overwrite properties from T with properties from U
 */
export type Override<T, U> = Simplify<Omit<T, keyof T & keyof U> & U>
