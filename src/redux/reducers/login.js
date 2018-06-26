import {LOGIN, LOGOUT} from '../actionTypes'

const INITIAL_STATE = {
  message: '',
  id_token: '',
  email: '',
  user_id: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      let message = action.payload.message
      let id_token = action.payload.session.authToken
      let email = action.payload.user.email
      let user_id = action.payload.user.id
      return {...state, message, id_token, email, user_id};
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}
