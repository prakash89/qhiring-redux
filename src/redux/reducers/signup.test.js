import reducer from './signup';
import * as types from '../actionTypes';
describe('signup reducer', () => {
  it('should return the initial state for signup', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        message: "",
        email: "",
        authToken: "",

      }
    )
  })
  it('should handle signup', () => {
    expect(
      reducer([], {
        type: types.SIGNUP,
        payload: { message: 'Run the tests', session: { authToken: "123" }, user: { email: "abc@yopmail.com" } }
      })
    ).toEqual(
      {
        authToken: '123',
        message: "Run the tests",
        email: "abc@yopmail.com"
      }
    )
  })
})