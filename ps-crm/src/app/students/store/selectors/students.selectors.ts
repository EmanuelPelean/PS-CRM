import {createFeatureSelector, createSelector} from '@ngrx/store';
import {StudentsState} from '../state/students.state';
import {StudentsStateMain} from '../reducers';


export const getStudentsStateMain = createFeatureSelector<StudentsStateMain>(
  'StudentsMain'
);

// student state
export const getStudentsState = createSelector(
  getStudentsStateMain,
  (state: StudentsStateMain) => state.students
);

export const getAllStudents = createSelector(getStudentsState, (state: StudentsState) => state.data);
export const getStudentsLoading = createSelector(getStudentsState, (state: StudentsState) => state.loading);
export const getStudentsLoaded = createSelector(getStudentsState, (state: StudentsState) => state.loaded);
