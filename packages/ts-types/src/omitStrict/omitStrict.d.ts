/**
 * Same as `Omit`, but `K` must be a key of `T` — a typo in the key fails at compile time.
 *
 * @template T - Object type to remove properties from.
 * @template K - Keys of `T` to remove.
 * @example
 * type Result = OmitStrict<{ a: 1; b: 2; c: 3 }, 'a' | 'c'> // { b: 2 }
 */
export type OmitStrict<T, K extends keyof T> = Omit<T, K>
