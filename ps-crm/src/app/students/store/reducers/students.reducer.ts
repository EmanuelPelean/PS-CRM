import * as fromState from '../state/students.state';
import * as fromActions from '../actions/students.actions';
import { studentAdapter } from '../state/students.state';

export function studentsReducer(
  state = fromState.initialState,
  action: fromActions.StudentsActions
): fromState.StudentsState {
  switch (action.type) {
    case fromActions.StudentsActionTypes.LOAD_STUDENTS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromActions.StudentsActionTypes.LOAD_STUDENTS_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }

    case fromActions.StudentsActionTypes.LOAD_STUDENTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    case fromActions.StudentsActionTypes.ADD_STUDENTS: {
      return studentAdapter.addAll(action.payload.students, state);
    }

    case fromActions.StudentsActionTypes.STUDENTS_CREATE_USER_SUCCESS: {
      const payload = action.payload;
      return {
        ...state,
        lastCreatedUser: payload.user
      };
    }
  }

  return state;
}
