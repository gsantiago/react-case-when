import expect from 'expect'
import match from '../src/match'

describe('match', () => {
  it('should match', () => {
    expect(match(true)).toBeTruthy()
    expect(match(undefined)).toBeTruthy()
    expect(match(null)).toBeTruthy()
  })

  it('should not match', () => {
    expect(match(false)).toBeFalsy()
    expect(match('')).toBeFalsy()
    expect(match('string')).toBeFalsy()
    expect(match([])).toBeFalsy()
    expect(match({})).toBeFalsy()
  })
})
