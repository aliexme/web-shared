export const uniquify = <T>(array: T[]): T[] => {
  return [...new Set(array)]
}
