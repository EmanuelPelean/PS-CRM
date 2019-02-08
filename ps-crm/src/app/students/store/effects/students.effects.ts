import { Injectable } from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import { of } from 'rxjs';
import {map, switchMap, catchError, tap} from 'rxjs/operators';

import * as studentActions from '../actions/students.actions';
import * as fromServices from '../../services';

@Injectable()
export class StudentsEffects {
  constructor(
    private actions$: Actions,
    private studentsService: fromServices.StudentsService
  ) {}

  @Effect()
  loadStudents$ = this.actions$.pipe(ofType(studentActions.StudentsActionTypes.LOAD_STUDENTS),
    switchMap(() => {
      return this.studentsService.getStudents().pipe(
        tap(val => console.log(val)),
        map(students => new studentActions.LoadStudentsSuccessAction(students)),
        catchError(error => of(new studentActions.LoadStudentsFailAction(error)))
      );
    }));
}
