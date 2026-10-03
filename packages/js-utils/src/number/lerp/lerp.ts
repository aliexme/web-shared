export const lerp = (start: number, end: number, alpha: number): number => {
  return (1 - alpha) * start + alpha * end
}
