import { asyncResult } from './asyncResult'

describe('asyncResult', () => {
  it('should return function result asynchronously', async () => {
    const func = jest.fn((num: number) => num + 42)

    await expect(asyncResult(() => func(42))).resolves.toBe(84)
  })
})
