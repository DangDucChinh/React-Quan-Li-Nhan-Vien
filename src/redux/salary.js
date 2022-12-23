import * as ActionTypes from './ActionTypes';

export const salary = (state = { errMess: null, salary:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_SALARY:
      return {...state, isLoading: false, errMess: null, salary: action.payload};
    case ActionTypes.SALARY_FAILED:
      return {...state, errMess: action.payload};
      case ActionTypes.SALARY_LOADING:
        return {...state, isLoading: true, errMess: null, salary: []}
    default:
      return state;
  }
};