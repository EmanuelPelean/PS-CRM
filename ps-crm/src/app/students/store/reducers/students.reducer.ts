import * as fromState from '../state/students.state';
import * as fromActions from '../actions/students.actions';

export function studentsReducer(
  state = fromState.initialState,
  action: fromActions.StudentsActions
): fromState.StudentsState {
  switch (action.type) {
    case fromActions.LOAD_STUDENTS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromActions.LOAD_STUDENTS_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }

    case fromActions.LOAD_STUDENTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }
  return state;
}
