/**
 * Same as Omit, but K must be extended from keyof T
 */
export type OmitStrict<T, K extends keyof T> = Omit<T, K>

/**
 * Make specific properties in T optional
 */
export type PartialProp<T, K extends keyof T> = Omit<T, K> & {
  [P in K]?: T[P]
}

/**
 * Make specific properties in T required
 */
export type RequiredProp<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: T[P]
}

/**
 * Combine T and U and overwrite properties from T with properties from U
 */
export type Override<T, U> = Omit<T, keyof T & keyof U> & U

/**
 * Extract values from T
 */
export type ValueOf<T> = T[keyof T]

/**
 * Create a tuple of T of a given length
 */
export type Tuple<T, N, R extends T[] = []> = R['length'] extends N ? R : Tuple<T, N, [...R, T]>
