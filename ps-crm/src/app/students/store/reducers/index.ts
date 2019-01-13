import { ActionReducerMap } from '@ngrx/store';
import * as fromStudentsState from '../state/students.state';
import * as fromStudentsReducers from './students.reducer';

export interface StudentsState {
  students: fromStudentsState.StudentsState;
}

export const reducers: ActionReducerMap<StudentsState> = {
  students: fromStudentsReducers.studentsReducer,
};
