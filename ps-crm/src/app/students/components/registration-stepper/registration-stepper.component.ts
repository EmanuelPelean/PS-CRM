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
  thirdFormGroup: FormGroup;

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
      email: ['', Validators.required],
      sex: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      permit_issued: [''],
      permit_expiry: [''],
      license_num: [''],
      license_type_o: [''],
      license_type_a: [''],
      license_type_b: [''],
      license_type_c: [''],
      endorsement_h: [''],
      endorsement_n: [''],
      endorsement_p: [''],
      endorsement_s: [''],
      endorsement_t: [''],
      endorsement_x: [''],
      endorsement_none: [''],
      restriction_e: [''],
      restriction_k: [''],
      restriction_l: [''],
      restriction_m: [''],
      restriction_n: [''],
      restriction_o: [''],
      restriction_p: [''],
      restriction_v: [''],
      restriction_x: [''],
      restriction_z: [''],
      restriction_none: ['']
    });
    this.thirdFormGroup = this._formBuilder.group({});
  }
}
