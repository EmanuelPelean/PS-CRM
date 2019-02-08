// load pizzas
import { Action } from '@ngrx/store';
import { Student } from '../../models/student.model';
export enum StudentsActionTypes {
  LOAD_STUDENTS = '[Students] Load Students',
  LOAD_STUDENTS_FAIL = '[Students] Load Students Fail',
  LOAD_STUDENTS_SUCCESS = '[Students] Load Students Success',
  ADD_STUDENTS = '[Students] Add Students'
}
export class LoadStudentsAction implements Action {
  readonly type = StudentsActionTypes.LOAD_STUDENTS;
}

export class LoadStudentsFailAction implements Action {
  readonly type = StudentsActionTypes.LOAD_STUDENTS_FAIL;
  constructor(public payload: any) {}
}

export class LoadStudentsSuccessAction implements Action {
  readonly type = StudentsActionTypes.LOAD_STUDENTS_SUCCESS;
  constructor(public payload: Student[]) {}
}

export class AddStudentsAction implements Action {
  readonly type = StudentsActionTypes.ADD_STUDENTS;
  constructor(public payload: { students: Student[] }) {}
}

// action types
export type StudentsActions =
  | LoadStudentsAction
  | LoadStudentsFailAction
  | LoadStudentsSuccessAction
  | AddStudentsAction;
