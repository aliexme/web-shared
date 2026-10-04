/**
 * Same as Omit, but K must be extended from keyof T
 */
export type OmitStrict<T, K extends keyof T> = Omit<T, K>
