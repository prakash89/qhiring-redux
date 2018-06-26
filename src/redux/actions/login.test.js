import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as types from '../actionTypes';
import * as actions from './login';
import fetchMock from 'fetch-mock';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
import API_END_POINT from '../../Api';

describe('login actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  beforeAll(() => {
    const localStorage = require('../localStorage') ;
  });

  it('should create an action to create session', () => {
    let res = {message: 'success', session:{authToken: '1234'}}
    fetchMock.post(`${API_END_POINT}login`, { body: res, headers: { 'content-type': 'application/json' } })
    const params = {'email': 'abc@yopmail.com', 'password': 'Qwinix123'}
    const expectedAction = {
      type: types.LOGIN,
      payload: res
    }
    const initialState = {
      message: '',
      id_token: '',
    }
    const store = mockStore(initialState)
    return store.dispatch(actions.login(params)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual([expectedAction])
    })
  })
})
