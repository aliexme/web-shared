export const floor = (value: number, precision = 0): number => {
  return Math.floor(value * 10 ** precision) / 10 ** precision
}
