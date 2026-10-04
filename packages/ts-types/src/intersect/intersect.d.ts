/**
 * Convert a union type into an intersection type
 */
export type Intersect<T> = (T extends never ? never : (_: T) => never) extends (_: infer R) => void ? R : never
