import {
	QUESTIONS,
	SHOWVERBAL,
	SHOWLOGICAL,
  SHOWQUANTITATIVE,
  ADMINQUESTIONSLIST,
  LOGOUT,
  QUESTION_ADDITION_SUCCESS,
  QUESTION_ADDITION_SUCCESS_HIDE
} from '../actionTypes'


const INITIAL_STATE = {
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
  sectionNumber: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QUESTIONS:
      return {
        ...state,
        items: action.questions,
      };
    case ADMINQUESTIONSLIST:
      let questions  = action.payload;
      return {
        ...state,
        questions
      };
    case QUESTION_ADDITION_SUCCESS:
    return {
      ...state,
      message: 'Question added successfully.'
    }
    case QUESTION_ADDITION_SUCCESS_HIDE:
    return {
      ...state,
      message: ''
    }
    case SHOWLOGICAL:
      return {
        ...state,
        showVerbal: false,
        showLogical: true,
        resultId: action.resultId,
        sectionNumber:  action.sectionNumber,
      };
    case SHOWQUANTITATIVE:
      return {
        ...state,
        showLogical: false,
        showQuantitative: true,
        sectionNumber:  action.sectionNumber,
      };
    case SHOWVERBAL:
      return {
        ...state,
        showVerbal: true,
        showQuantitative: false,
        sectionNumber:  action.sectionNumber,
    };
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}
