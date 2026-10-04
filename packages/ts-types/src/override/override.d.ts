/**
 * Combine T and U and overwrite properties from T with properties from U
 */
export type Override<T, U> = Omit<T, keyof T & keyof U> & U
