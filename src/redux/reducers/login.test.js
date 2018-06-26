import reducer from './login';
import * as types from '../actionTypes';
describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
        {
            message: "",
            id_token: ""
        }
        )
    })
    it('should handle ADD_TODO', () => {
        expect(
        reducer([], {
            type: types.LOGIN,
            payload: {message: 'Run the tests', session: {authToken: "123"}}
        })
        ).toEqual(
        {
            id_token: '123',
            message: "Run the tests",
        }
        )
    })
})