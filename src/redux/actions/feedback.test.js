import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as types from '../actionTypes';
import * as actions from './feedback';
import fetchMock from 'fetch-mock';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
import API_END_POINT from '../../Api';

describe("Feedback action", () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
  beforeAll(() => {
    const localStorage = require('../localStorage');
  });

  it("should be able to create feedback", () => {
    let res = { message: "Feedback submitted successfully." }
    localStorage.setItem("idToken", "testingToken");
    localStorage.setItem("userEmail", "abc@yopmail.com");

    fetchMock.post(`${API_END_POINT}feedback`, { body: res, headers: { 'content-type': 'application/json' } })
    const params = {
      email: localStorage.getItem("userEmail"),
      overall: "4",
      verbal: "4",
      logical: "3",
      quantitative: "2",
      description: "Nothing"
    }

    const expectedAction = {
      type: types.FEEDBACK,
      payload: res,
    }

    const initialState = {
      message: ""
    }
    const store = mockStore(initialState)
    return store.dispatch(actions.feedback(params)).then(() => {
      expect(store.getActions()).toEqual([expectedAction])
    })
  })

})