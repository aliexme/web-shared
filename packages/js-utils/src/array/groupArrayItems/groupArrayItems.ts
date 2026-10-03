export const groupArrayItems = <T extends Record<string, unknown>, K extends keyof T>(
  array: T[],
  key: K,
): Record<string | number, T[]> => {
  const map: Record<string | number, T[]> = {}

  array.forEach((item) => {
    const itemKeyValue = item[key] as string | number
    const itemsGroup = map[itemKeyValue]
    if (itemsGroup) {
      itemsGroup.push(item)
    } else {
      map[itemKeyValue] = [item]
    }
  })

  return map
}
