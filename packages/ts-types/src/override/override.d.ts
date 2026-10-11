import type { Simplify } from '../simplify'

/**
 * Combine `T` and `U`, overwriting matching properties of `T` with the ones from `U`.
 *
 * The result is a flat object type: all properties of `U` plus the properties of `T` not present in `U`.
 *
 * @example
 *   type Result = Override<{ a: 1; b: 2 }, { a: string; c: true }> // { a: string; b: 2; c: true }
 *
 * @template T - Base object type.
 * @template U - Object type whose properties win over the matching ones in `T`.
 */
export type Override<T, U> = Simplify<Omit<T, keyof T & keyof U> & U>
