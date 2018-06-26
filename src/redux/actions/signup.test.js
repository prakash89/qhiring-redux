import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as types from '../actionTypes';
import * as actions from './signup';
import fetchMock from 'fetch-mock';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
import API_END_POINT from '../../Api';

describe("signuup action", () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it("should create action for signup", () => {
        let res = { message: "signup done", session: {authToken: "123"}, user: {email: "abc@yopmail.com"}}
        fetchMock.post(`${API_END_POINT}register`, { body: res, headers: { 'content-type': 'application/json' }})
        const params = {
            firstname: "prakash",
            lastname: "sl",
            email: "abc@yopmail.com",
            password: "Qwinix123",
            passwordconfirmation: "Qwinix123",
            college: "BGS",
            branch: "EC",
            batch: "2012",
            yearofpassing: "2012",
            phone: "1234567890",
            city: "mysore",
          }

        const expectedAction = {
            type: types.SIGNUP,
            payload: res,
        }

        const initialState = {
            message: "",
            authToken: "",
            email: "",
        }
        const store = mockStore(initialState)
        return store.dispatch(actions.signup(params)).then(() => {
            expect(store.getActions()).toEqual([expectedAction])
        })
    })
})