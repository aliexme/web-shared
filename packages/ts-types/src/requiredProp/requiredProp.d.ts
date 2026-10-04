/**
 * Make specific properties in T required
 */
export type RequiredProp<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: T[P]
}
