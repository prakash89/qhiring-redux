import reducer from './questions';
import * as types from '../actionTypes';
describe('question reducer', () => {
  it('should return the initial state for question', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        message: '',
        items: {
          logical: [],
          quantitative: [],
          verbal: []
        },
        questions: [],
        showVerbal: true,
        showLogical: false,
        showQuantitative: false,
        resultId: null,
      }
    )
  })
  it('should handle question list', () => {
    expect(
      reducer([], {
        type: types.QUESTIONS,
        questions: {
            "exam": {
              "verbal": [{
                "id": 155,
                "title": "Choose one word which resembles the sentence:Study of skin and skin diseases",
                "options": [
                  "Orthopaedics",
                  "Dermatology",
                  "Gynaecology",
                  "Endocrinology"
                ]
              }
              ]
            }
          }
      })
    ).toEqual(
      {
        "items": {
          "exam": {
            "verbal": [{
              "id": 155,
              "title": "Choose one word which resembles the sentence:Study of skin and skin diseases",
              "options": [
                "Orthopaedics",
                "Dermatology",
                "Gynaecology",
                "Endocrinology"
              ]
            }
            ]
          }
        }
      }
    )
  })
})