/**
 * Masks a string, keeping only its last few characters visible.
 *
 * @param str - String to mask
 * @param options - Secure string options
 * @param options.maxInsecureChars - Maximum number of visible characters at the end (default 4)
 * @returns Masked string
 *
 * @example
 * secureString('secret-token') // '****oken'
 */
export const secureString = (
  str: string,
  options: {
    maxInsecureChars?: number
  } = {},
): string => {
  const { maxInsecureChars = 4 } = options
  const securePart = '****'

  if (!str) {
    return str
  }

  const maxInsecureEndPartChars = Math.min(Math.floor(str.length / 2), maxInsecureChars)
  const insecureEndPart = str.slice(str.length - maxInsecureEndPartChars)

  return `${securePart}${insecureEndPart}`
}
