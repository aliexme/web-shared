/**
 * Flatten an intersection into a single object type
 */
export type Simplify<T> = { [K in keyof T]: T[K] }
