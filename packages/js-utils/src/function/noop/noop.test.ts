import { describe, expect, it } from 'vitest'

import { noop } from './noop'

describe('noop', () => {
  it('should return void', () => {
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression -- asserting the void return value
    expect(noop()).toBeUndefined()
  })
})
