import { ActionReducerMap } from '@ngrx/store';
import * as fromStudentsState from '../state/students.state';
import * as fromStudentsReducers from './students.reducer';

export interface StudentsStateMain {
  students: fromStudentsState.StudentsState;
}

export const reducers: ActionReducerMap<StudentsStateMain> = {
  students: fromStudentsReducers.studentsReducer
};
