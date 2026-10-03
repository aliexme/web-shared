import { groupArrayItems } from './groupArrayItems'

describe('groupArrayItems', () => {
  it('should group array items by key', () => {
    const array = [
      { key: '1', value: '1-1' },
      { key: '1', value: '1-2' },
      { key: '2', value: '2-1' },
    ]

    const result = groupArrayItems(array, 'key')

    expect(result).toEqual({
      1: [
        { key: '1', value: '1-1' },
        { key: '1', value: '1-2' },
      ],
      2: [{ key: '2', value: '2-1' }],
    })
  })

  it('should return empty object for empty array', () => {
    const result = groupArrayItems([], '')
    expect(result).toEqual({})
  })
})
