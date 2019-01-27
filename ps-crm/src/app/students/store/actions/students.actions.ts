// load pizzas
import { Action } from '@ngrx/store';
import { Student } from '../../models/student.model';

export const LOAD_STUDENTS = '[Students] Load Students';
export const LOAD_STUDENTS_FAIL = '[Students] Load Students Fail';
export const LOAD_STUDENTS_SUCCESS = '[Students] Load Students Success';

export class LoadStudents implements Action {
  readonly type = LOAD_STUDENTS;
}

export class LoadStudentsFail implements Action {
  readonly type = LOAD_STUDENTS_FAIL;
  constructor(public payload: any) {}
}

export class LoadStudentsSuccess implements Action {
  readonly type = LOAD_STUDENTS_SUCCESS;
  constructor(public payload: Student[]) {}
}

// action types
export type StudentsActions =
  | LoadStudents
  | LoadStudentsFail
  | LoadStudentsSuccess;
