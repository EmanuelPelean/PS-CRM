import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { map, switchMap, catchError, tap, concatMap } from 'rxjs/operators';

import * as studentActions from '../actions/students.actions';
import * as fromServices from '../../services';
import { RegistrationOneModel } from '../../models/registrationOne.model';
import { RegistrationTwoModel } from '../../models/registrationTwo.model';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from 'firebase';

@Injectable()
export class StudentsEffects {
  constructor(
    private actions$: Actions,
    private studentsService: fromServices.StudentsService,
    private authService: AuthService
  ) {}

  @Effect()
  loadStudents$ = this.actions$.pipe(
    ofType<studentActions.LoadStudentsAction>(
      studentActions.StudentsActionTypes.LOAD_STUDENTS
    ),
    switchMap(() => {
      return this.studentsService.getStudents().pipe(
        map(students => new studentActions.LoadStudentsSuccessAction(students)),
        catchError(error =>
          of(new studentActions.LoadStudentsFailAction(error))
        )
      );
    })
  );

  /** Effect to create a new user in Firebase and to save the user data to Firestore database **/
  @Effect()
  onCreateStudent$ = this.actions$.pipe(
    ofType<studentActions.StudentsCreateUserRequestAction>(
      studentActions.StudentsActionTypes.STUDENTS_CREATE_USER_REQUEST
    ),
    map(
      (action: studentActions.StudentsCreateUserRequestAction) => action.payload
    ),
    concatMap(
      (payload: {
        firstForm: RegistrationOneModel;
        secondForm: RegistrationTwoModel;
      }) =>
        from(
          this.authService.signupUser(payload.firstForm.email, 'password1')
        ).pipe(
          switchMap((firebaseUser: User) =>
            from(
              this.studentsService.createUser({
                firstForm: payload.firstForm,
                secondForm: payload.secondForm,
                userId: firebaseUser.uid
              })
            ).pipe(
              concatMap(() => [
                new studentActions.StudentsCreateUserSuccessAction({
                  user: firebaseUser.uid
                })
              ]),
              catchError(err =>
                of(new studentActions.StudentsCreateUserFailAction(err))
              )
            )
          ),
          catchError(error =>
            of(new studentActions.StudentsCreateUserFailAction(error))
          )
        )
    )
  );
}
