import * as ActionTypes from './ActionTypes';

export const departments = (state = { errMess: null, departments:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_DEPARTMENTS:
      return {...state, isLoading: false, errMess: null, departments: action.payload};
    case ActionTypes.DEPARTMENTS_FAILED:
      return {...state, errMess: action.payload};
      case ActionTypes.DEPARTMENTS_LOADING:
        return {...state, isLoading: true, errMess: null, departments: []}
    default:
      return state;
  }
};