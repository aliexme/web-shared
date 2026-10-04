import type { Intersect } from '../intersect'

/**
 * Convert a union type into a tuple
 */
export type UnionTuple<T> =
  Intersect<T extends never ? never : (_: T) => T> extends (_: never) => infer R
    ? [...UnionTuple<Exclude<T, R>>, R]
    : []
