import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
export const fetchStaffs = () => (dispatch) => {

    dispatch(staffsLoading(true));

    return fetch(baseUrl + 'staffs')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(staffs => dispatch(addStaff(staffs)))
    .catch(error => dispatch(staffsFailed(error.message)));
}



export const staffsLoading = () => ({
    type: ActionTypes.STAFFS_LOADING
});

export const staffsFailed = (errmess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errmess
});
export const addStaff = (staff) => ({
    type: ActionTypes.ADD_STAFFS,
    payload: staff
});


export const postStaffs= (name,doB,startDate,departmentId,salaryScale,overTime,annualLeave) => (dispatch) => {
  const newStaff= {
      id: 0,
      name: name,
      doB: doB,
      salaryScale: salaryScale,
      startDate: startDate,
      departmentId:departmentId,
      annualLeave: annualLeave,
      overTime: overTime,
      image : "/assets/images/alberto.png",
  };
  
  return fetch(baseUrl + 'staffs', {
      method: "POST",
      body: JSON.stringify(newStaff),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => dispatch(addStaff(response)))
  .catch(error =>  { console.log('post Staff', error.message); alert('new staff could not be posted\nError: '+error.message); });
};

export const PatchStaffs= (Staff) => (dispatch) => {
  
  return fetch(baseUrl + 'staffs', {
      method: "PATCH",
      body: JSON.stringify(Staff),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => dispatch(addStaff(response)))
  .catch(error =>  { console.log('patch Staff', error.message); alert('staff could not be edited\nError: '+error.message); });
};


export const deleteStaff= (id) => (dispatch) => {
  return fetch(baseUrl + 'staffs/'+ id, {
      method: "DELETE"
  })
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => dispatch(addStaff(response)))
  .catch(error =>  { console.log('Delete Staff', error.message); alert('ko xoa dc\nError: '+error.message); });
};


//department
export const fetchDepartments = () => (dispatch) => {

    dispatch(departmentsLoading(true));

    return fetch(baseUrl + 'departments')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(staffs => dispatch(addDepartments(staffs)))
    .catch(error => dispatch(departmentsFailed(error.message)));
}

export const departmentsLoading = () => ({
    type: ActionTypes.DEPARTMENTS_LOADING
});

export const departmentsFailed = (errmess) => ({
    type: ActionTypes.DEPARTMENTS_FAILED,
    payload: errmess
});
export const addDepartments = (staff) => ({
    type: ActionTypes.ADD_DEPARTMENTS,
    payload: staff
});


export const fetchsalary = () => (dispatch) => {

  dispatch(salaryLoading(true));

  return fetch(baseUrl + 'staffsSalary')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(salary => dispatch(addSalary(salary)))
  .catch(error => dispatch(salaryFailed(error.message)));
}
export const salaryLoading = () => ({
  type: ActionTypes.SALARY_LOADING
});

export const salaryFailed = (errmess) => ({
  type: ActionTypes.SALARY_FAILED,
  payload: errmess
});
export const addSalary = (staff) => ({
  type: ActionTypes.ADD_SALARY,
  payload: staff
});