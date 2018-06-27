import {
  QUESTIONS,
  SHOWVERBAL,
  SHOWLOGICAL,
  SHOWQUANTITATIVE,
  ADMINQUESTIONSLIST,
  QUESTION_ADDITION_SUCCESS,
  QUESTION_ADDITION_SUCCESS_HIDE
} from '../actionTypes';
import API_END_POINT from '../../Api';

export const fetchQuestions = () => {
  return (dispatch) => {
    const URL = `${API_END_POINT}questions`;
    return fetch(URL, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('idToken'),
        "email": localStorage.getItem('userEmail')
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log('fetchQuestions success - ', json)
        dispatch({
          type: QUESTIONS,
          questions: json.exam,
        })
      })
      .catch(error => {
        console.log('fetchQuestions  error - ', error)
      })
  }
}

export const submitAnswers = (answers, section_number, resultId) => {
  var params = {
    exam: {
      section_number: section_number,
      answers: answers,
      user_id: localStorage.getItem('userId'),
      resultId: resultId,
    }
  };
  return (dispatch) => {
    const URL = `${API_END_POINT}results`;
    return fetch(URL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('idToken'),
        "email": localStorage.getItem('userEmail')
      },
      body: JSON.stringify(params),
    })
      .then(response => response.json())
      .then(json => {
        if (section_number === 1) {
          dispatch({
            type: SHOWLOGICAL,
            resultId: json.resultId,
            sectionNumber: section_number,
          })
        }
        if (section_number === 2) {
          dispatch({
            type: SHOWQUANTITATIVE,
            sectionNumber: section_number,
          })
        }
        if (section_number === 3) {
          dispatch({
            type: SHOWVERBAL,
            sectionNumber: section_number,
          })
        }
        console.log('submitAnswers success - ', json)
      })
      .catch(error => {
        console.log('submitAnswers  error - ', error)
      })
  }
}


export const adminQuestionsList = (params) => {
  return (dispatch) => {
    const URL = `${API_END_POINT}allQuestions`;
    fetch(URL, {
      method: 'GET',
      headers: {
        "email": localStorage.getItem("userEmail"),
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("idToken")
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        dispatch({
          type: ADMINQUESTIONSLIST,
          payload: responseJson.data
        })
      })
  }
}

export const addQuestion = (params) => {
  return (dispatch) => {
    const URL = `${API_END_POINT}createQuestion`;
    fetch(URL, {
      method: 'POST',
      headers: {
        "email": localStorage.getItem("userEmail"),
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("idToken")
      },
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log("add question response:", responseJson)
        dispatch({
          type: QUESTION_ADDITION_SUCCESS
        })
        setTimeout(
          function () {
            dispatch({
              type: QUESTION_ADDITION_SUCCESS_HIDE
            })
          }
            .bind(this), 3000);
      })
  }
}
