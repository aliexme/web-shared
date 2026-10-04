/**
 * Tuple of `T` of a given length, fixed at compile time.
 *
 * A non-literal `number` length falls back to `T[]`.
 *
 * @template T - Element type.
 * @template N - Literal tuple length.
 * @example
 * type Result = Tuple<string, 3> // [string, string, string]
 */
export type Tuple<T, N extends number, R extends T[] = []> = number extends N
  ? T[]
  : R['length'] extends N
    ? R
    : Tuple<T, N, [...R, T]>
