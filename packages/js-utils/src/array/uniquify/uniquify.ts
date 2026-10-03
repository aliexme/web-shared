/**
 * @deprecated Superseded by the native spread of `Set` (ES2015).
 * Use `[...new Set(array)]` instead
 */
export const uniquify = <T>(array: T[]): T[] => {
  return [...new Set(array)]
}
