import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {StudentsStoreService} from '../../store/store-services';
import {RegistrationOneModel} from '../../models/registrationOne.model';
import {RegistrationTwoModel} from '../../models/registrationTwo.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent {
  constructor(private studentsStoreService: StudentsStoreService) {}

  public onCreateUser(userData: {
    firstForm: RegistrationOneModel;
    secondForm: RegistrationTwoModel;
  }) {
    this.studentsStoreService.createUser(userData);
  }
}
