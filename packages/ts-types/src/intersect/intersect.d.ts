/**
 * Convert a union type into an intersection of its members.
 *
 * @template T - Union type to intersect.
 * @example
 * type Result = Intersect<{ a: 1 } | { b: 2 }> // { a: 1 } & { b: 2 }
 */
export type Intersect<T> = (T extends never ? never : (_: T) => never) extends (_: infer R) => void ? R : never
