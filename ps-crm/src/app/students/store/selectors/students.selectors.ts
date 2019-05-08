import { createFeatureSelector, createSelector } from '@ngrx/store';
import { studentAdapter, StudentsState } from '../state/students.state';
import { StudentsStateMain } from '../reducers';

export const getStudentsStateMain = createFeatureSelector<StudentsStateMain>(
  'StudentsMain'
);

// student state
export const getStudentsState = createSelector(
  getStudentsStateMain,
  (state: StudentsStateMain) => state.students
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = studentAdapter.getSelectors();

export const getAllStudents = createSelector(
  getStudentsState,
  (state: StudentsState) => selectAll(state)
);
export const getStudentsIds = createSelector(
  getStudentsState,
  (state: StudentsState) => selectIds(state)
);
export const getTotalStudents = createSelector(
  getStudentsState,
  (state: StudentsState) => selectTotal(state)
);

export const getStudentsLoading = createSelector(
  getStudentsState,
  (state: StudentsState) => state.loading
);

export const getStudentsLoaded = createSelector(
  getStudentsState,
  (state: StudentsState) => state.loaded
);

export const getStudentById = (id: string) => createSelector(
  getStudentsState,
  (state: StudentsState) => state.entities[id]
);

export const getLastCreatedUserId = createSelector(
  getStudentsState,
  (state: StudentsState) => state.lastCreatedUserId
);
