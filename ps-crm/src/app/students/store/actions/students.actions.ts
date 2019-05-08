import { Action } from '@ngrx/store';
import { Student } from '../../models/student.model';
import { FormGroup } from '@angular/forms';
import { RegistrationOneModel } from '../../models/registrationOne.model';
import { RegistrationTwoModel } from '../../models/registrationTwo.model';
import { User } from 'firebase';

export enum StudentsActionTypes {
  LOAD_STUDENTS = '[Students] Load Students',
  LOAD_STUDENTS_FAIL = '[Students] Load Students Fail',
  LOAD_STUDENTS_SUCCESS = '[Students] Load Students Success',
  ADD_STUDENTS = '[Students] Add Students',
  STUDENTS_CREATE_USER_REQUEST = '[Students] Create User Request',
  STUDENTS_CREATE_USER_SUCCESS = '[Students] Create User Success',
  STUDENTS_CREATE_USER_FAIL = '[Students] Create User Fail',
  STUDENTS_UPDATE_DOC_URL_REQUEST = '[Students] Update Doc Url Request',
  STUDENTS_UPDATE_DOC_URL_SUCCESS = '[Students] Update Doc Url Success',
  STUDENTS_UPDATE_DOC_URL_FAIL = '[Students] Update Doc Url Fail'
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

export class UpdateDocURLRequestAction implements Action {
  readonly type = StudentsActionTypes.STUDENTS_UPDATE_DOC_URL_REQUEST;
  constructor(public payload: { fileUrl: any }) {}
}

export class UpdateDocURLSuccessAction implements Action {
  readonly type = StudentsActionTypes.STUDENTS_UPDATE_DOC_URL_SUCCESS;
}

export class UpdateDocURLFailAction implements Action {
  readonly type = StudentsActionTypes.STUDENTS_UPDATE_DOC_URL_FAIL;
  constructor(public payload: { err: string }) {}
}

export class StudentsCreateUserRequestAction implements Action {
  readonly type = StudentsActionTypes.STUDENTS_CREATE_USER_REQUEST;
  constructor(
    public payload: {
      firstForm: RegistrationOneModel;
      secondForm: RegistrationTwoModel;
    }
  ) {}
}

export class StudentsCreateUserSuccessAction implements Action {
  readonly type = StudentsActionTypes.STUDENTS_CREATE_USER_SUCCESS;
  constructor(public payload: { user: string }) {}
}

export class StudentsCreateUserFailAction implements Action {
  readonly type = StudentsActionTypes.STUDENTS_CREATE_USER_FAIL;
  constructor(public payload: { error: string }) {}
}

// action types
export type StudentsActions =
  | LoadStudentsAction
  | LoadStudentsFailAction
  | LoadStudentsSuccessAction
  | AddStudentsAction
  | StudentsCreateUserRequestAction
  | StudentsCreateUserSuccessAction
  | StudentsCreateUserFailAction
  | UpdateDocURLRequestAction
  | UpdateDocURLSuccessAction
  | UpdateDocURLFailAction;
