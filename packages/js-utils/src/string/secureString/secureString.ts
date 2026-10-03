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
