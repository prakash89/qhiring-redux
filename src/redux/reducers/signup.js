import {SIGNUP, LOGOUT} from '../actionTypes'

const INITIAL_STATE = {
  message: '',
  email: '',
  authToken: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP:
      let {message} = action.payload;
      let {authToken} = action.payload.session;
      let {email} = action.payload.user;
      return {...state, message, authToken, email};
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}
