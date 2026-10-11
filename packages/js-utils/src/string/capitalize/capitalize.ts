/**
 * Capitalizes the first character of a string.
 *
 * @example
 *   capitalize('hello') // 'Hello'
 *
 * @param str - String to capitalize
 * @returns Capitalized string
 */
export const capitalize = <T extends string>(str: T): Capitalize<T> => {
  return (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<T>
}
