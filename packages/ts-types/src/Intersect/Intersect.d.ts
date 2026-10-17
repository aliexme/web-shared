/**
 * Convert a union type into an intersection of its members.
 *
 * @example
 *   type Result = Intersect<{ a: 1 } | { b: 2 }> // { a: 1 } & { b: 2 }
 *
 * @template T - Union type to intersect.
 */
export type Intersect<T> = (T extends never ? never : (_: T) => never) extends (_: infer R) => void ? R : never
