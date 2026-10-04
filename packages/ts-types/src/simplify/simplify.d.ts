/**
 * Flatten an intersection into a single object type.
 *
 * Improves IDE hover display — `Simplify<{ a: 1 } & { b: 2 }>` shows as `{ a: 1; b: 2 }`
 * instead of a raw intersection. Preserves `readonly` and optional modifiers.
 *
 * @template T - Object or intersection type to flatten.
 * @example
 * type Result = Simplify<{ a: 1 } & { b: 'x' }> // { a: 1; b: 'x' }
 */
export type Simplify<T> = { [K in keyof T]: T[K] }
