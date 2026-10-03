/**
 * Capitalizes the first character of a string.
 *
 * @param str - String to capitalize
 * @returns Capitalized string
 *
 * @example
 * capitalize('hello') // 'Hello'
 */
export const capitalize = <T extends string>(str: T): Capitalize<T> => {
  return (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<T>
}
