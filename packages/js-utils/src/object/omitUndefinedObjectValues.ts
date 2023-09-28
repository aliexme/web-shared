import { objectForEach } from './objectForEach'

export const omitUndefinedObjectValues = <T extends Record<string, unknown>>(obj: T): T => {
  const result = {} as T

  objectForEach(obj, ({ key, value }) => {
    if (value !== undefined) {
      result[key] = value
    }
  })

  return result
}
