import reducer from './feedback';
import * as types from '../actionTypes';
describe('feedback reducer', () => {
  it('should return the initial state for feedback', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        message: ""
      }
    )
  })
  it('should handle feedback', () => {
    expect(
      reducer([], {
        type: types.FEEDBACK,
        payload: { message: 'Feedback submitted successfully.' }
      })
    ).toEqual(
      {
        message: "Feedback submitted successfully.",
      }
    )
  })
})