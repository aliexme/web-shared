import type { Intersect } from '../intersect'

/**
 * Convert a union type into a tuple containing each of its members.
 *
 * Works for literal, primitive and object unions; `never` yields an empty tuple.
 * The member order is deterministic but not part of the contract — do not rely on it.
 *
 * @template T - Union type to convert.
 * @example
 * type Result = UnionTuple<'a' | 1 | true> // [true, 1, 'a']
 */
export type UnionTuple<T> =
  Intersect<T extends never ? never : (_: T) => T> extends (_: never) => infer R
    ? [...UnionTuple<Exclude<T, R>>, R]
    : []
