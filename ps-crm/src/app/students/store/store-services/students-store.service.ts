import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { StudentsStateMain } from '../reducers';
import * as fromStudentsActions from '../actions/students.actions';
import { RegistrationOneModel } from '../../models/registrationOne.model';
import { RegistrationTwoModel } from '../../models/registrationTwo.model';
import { Observable } from 'rxjs';
import { getLastCreatedUserId } from '../selectors/students.selectors';

@Injectable({
  providedIn: 'root'
})
export class StudentsStoreService {
  constructor(private store: Store<StudentsStateMain>) {}

  public getLastCreatedUserId(): Observable<string> {
    return this.store.pipe(select(getLastCreatedUserId));
  }

  public createUser(userData: {
    firstForm: RegistrationOneModel;
    secondForm: RegistrationTwoModel;
  }): void {
    this.store.dispatch(
      new fromStudentsActions.StudentsCreateUserRequestAction(userData)
    );
  }

  public updateStudentFileURL(fileUrl: string): void {
    this.store.dispatch(
      new fromStudentsActions.UpdateDocURLRequestAction({ fileUrl })
    );
  }
}
