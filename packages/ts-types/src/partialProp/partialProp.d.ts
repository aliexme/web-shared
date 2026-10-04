/**
 * Make specific properties in T optional
 */
export type PartialProp<T, K extends keyof T> = Omit<T, K> & {
  [P in K]?: T[P]
}
