import {SIGNUP} from '../actionTypes';
import API_END_POINT from '../../Api';
import history from '../../history';

export const signup = (params) => {
  return(dispatch) => {
    const URL = `${API_END_POINT}register`;
    return fetch(URL, {
      method: 'POST',
      body: JSON.stringify(params)
    })
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: SIGNUP,
        payload: json
      })
      if (json.user.userRole === "admin") {
        history.push('/adminQuestionsList')
      }else{
        history.push('/instruction')
      }

    })
    .catch(error => {
    })
  }
}
