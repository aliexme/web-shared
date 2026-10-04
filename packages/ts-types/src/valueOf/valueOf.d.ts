/**
 * Union of value types of an object type.
 *
 * @template T - Object type to extract values from.
 * @example
 * type Result = ValueOf<{ a: 1; b: 'x' }> // 1 | 'x'
 */
export type ValueOf<T> = T[keyof T]
