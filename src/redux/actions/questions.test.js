import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as types from '../actionTypes';
import * as actions from './questions';
import fetchMock from 'fetch-mock';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)
import API_END_POINT from '../../Api';

describe('questions actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
  beforeAll(() => {
    const localStorage = require('../localStorage');
  });
  it('should fetch the questions list', () => {
    localStorage.setItem("idToken", "testingToken");
    localStorage.setItem("userEmail", "abc@yopmail.com")
    let response = {
      "message": "successfully fetched all questions",
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
          },
          {
            "id": 169,
            "title": "Choose the word which best expresses the meaning of the given word.LAMENT",
            "options": [
              "Complain",
              "Comment",
              "Condone",
              "Console"
            ]
          }
        ],
        "quantitative": [{
            "id": 432,
            "title": "The selling price of 13 apples is the same as the cost price of 26 mangoes . The selling price of 16 mangoes is the same as the cost price of 12 apples. If the profit on selling mangoes is 20%, What is the profit on selling apples?",
            "options": [
              "20%",
              "25%",
              "40%",
              "Cannot be determined"
            ]
          },
          {
            "id": 469,
            "title": "40 men can catch 200 sharks in 20 days working 6 hours a day. In how many days 25 men can catch 300 sharks working 4 hours a day?",
            "options": [
              "30",
              "34",
              "24",
              "20"
            ]
          }
        ],
        "logical": [{
            "id": 246,
            "title": "Here are some words translated from an artificial language.\nmigenlasan means cupboard\nlasanpoen means boardwalk\ncuopdansa means pullman\nWhich word could mean \"walkway\"?",
            "options": [
              "poenmigen",
              "cuopeisel",
              "lasandansa",
              "poenforc"
            ]
          },
          {
            "id": 230,
            "title": "Blueberries cost more than strawberries.\nBlueberries cost less than raspberries.\nRaspberries cost more than strawberries and blueberries.\nIf the first two statements are true, the third statement is",
            "options": [
              "TRUE",
              "FALSE",
              "Uncertain",
              "None of the above"
            ]
          }
        ]
      }
    }
    fetchMock.get(`${API_END_POINT}questions`, { body: response, headers: { 'content-type': 'application/json' } })

    const expectedAction = {
      type: types.QUESTIONS,
      questions: response.exam
    }
    const initialState = {
      message: '',
      items: {
        logical: [],
        quantitative: [],
        verbal: [],
      },
      questions: [],
      showVerbal: true,
      showLogical: false,
      showQuantitative: false,
    }
    const store = mockStore(initialState)
    return store.dispatch(actions.fetchQuestions()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual([expectedAction])
    })
  })
})
