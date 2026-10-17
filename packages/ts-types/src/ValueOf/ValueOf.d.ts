/**
 * Union of value types of an object type.
 *
 * @example
 *   type Result = ValueOf<{ a: 1; b: 'x' }> // 1 | 'x'
 *
 * @template T - Object type to extract values from.
 */
export type ValueOf<T> = T[keyof T]
