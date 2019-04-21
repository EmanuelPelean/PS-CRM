import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-stepper',
  templateUrl: './registration-stepper.component.html',
  styleUrls: ['./registration-stepper.component.less']
})
export class RegistrationStepperComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      first_name: ['', Validators.required],
      middle_name: ['', Validators.required],
      last_name: ['', Validators.required],
      birth_date: ['', Validators.required],
      address_street: ['', Validators.required],
      address_city: ['', Validators.required],
      address_state: ['', Validators.required],
      address_zip: ['', Validators.required],
      phone_cell: ['', Validators.required],
      email: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
