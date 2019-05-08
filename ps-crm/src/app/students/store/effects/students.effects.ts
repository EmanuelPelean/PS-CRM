import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import {
  map,
  switchMap,
  catchError,
  tap,
  concatMap,
  withLatestFrom
} from 'rxjs/operators';
import * as studentActions from '../actions/students.actions';
import { RegistrationOneModel } from '../../models/registrationOne.model';
import { RegistrationTwoModel } from '../../models/registrationTwo.model';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from 'firebase';
import { StudentsService } from '../../services';
import { select, Store } from '@ngrx/store';
import { StudentsStateMain } from '../reducers';
import { getLastCreatedUserId } from '../selectors/students.selectors';

@Injectable()
export class StudentsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<StudentsStateMain>,
    private studentsService: StudentsService,
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

  @Effect()
  updateFileURL$ = this.actions$.pipe(
    ofType<studentActions.UpdateDocURLRequestAction>(
      studentActions.StudentsActionTypes.STUDENTS_UPDATE_DOC_URL_REQUEST
    ),
    map((action: studentActions.UpdateDocURLRequestAction) => action.payload),
    tap(x => console.log(x)),
    withLatestFrom(
      this.store.pipe(select(state => getLastCreatedUserId(state)))
    ),
    switchMap(([payload, userId]) =>
      from(
        this.studentsService.updateDocURL(payload.fileUrl, userId).pipe(
          concatMap(() => [new studentActions.UpdateDocURLSuccessAction()]),
          catchError(err =>
            of(new studentActions.UpdateDocURLFailAction({ err }))
          )
        )
      )
    )
  );
}
