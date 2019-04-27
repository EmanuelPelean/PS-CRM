import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { StudentsStateMain } from '../reducers';
import * as fromStudentsActions from '../actions/students.actions';
import {RegistrationOneModel} from '../../models/registrationOne.model';
import {RegistrationTwoModel} from '../../models/registrationTwo.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsStoreService {
  constructor(private store: Store<StudentsStateMain>) {}

  public createUser(userData: { firstForm: RegistrationOneModel; secondForm: RegistrationTwoModel }) {
    this.store.dispatch(
      new fromStudentsActions.StudentsCreateUserRequestAction(userData)
    );
  }
}
