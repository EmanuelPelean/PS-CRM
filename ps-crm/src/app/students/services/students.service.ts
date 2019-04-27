import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../models/student.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { RegistrationOneModel } from '../models/registrationOne.model';
import { RegistrationTwoModel } from '../models/registrationTwo.model';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  studentsRoster: Student[] = [
    {
      id: 1,
      date_submitted: '01/06/2019',
      ip_address: '1.234.876',
      opt_in: 'unknown',
      name_first: 'Tom',
      name_last: 'Hanks',
      address: '123 Main St',
      phone: '910-999-9989',
      email: 'tom@me.com',
      program_type: 'Segment 1',
      course_time: 'Mon 8pm',
      additional_comments: 'excited'
    }
  ];

  constructor(private firestore: AngularFirestore) {}

  public getStudents(): Observable<Student[]> {
    return of(this.studentsRoster);
  }

  public createUser(user: {
    firstForm: RegistrationOneModel;
    secondForm: RegistrationTwoModel;
    userId: string;
  }) {
    return this.firestore.collection('users').add({
      userId: user.userId,
      first_name: user.firstForm.first_name,
      middle_name: user.firstForm.middle_name,
      last_name: user.firstForm.last_name,
      birth_date: user.firstForm.birth_date,
      address_street: user.firstForm.address_street,
      address_city: user.firstForm.address_city,
      address_state: user.firstForm.address_state,
      address_zip: user.firstForm.address_zip,
      phone_cell: user.firstForm.phone_cell,
      email: user.firstForm.email,
      sex: user.firstForm.sex,
      permit_issued: user.secondForm.permit_issued,
      permit_expiry: user.secondForm.permit_expiry,
      license_num: user.secondForm.license_num,
      license_types: [
        { license_type_o: user.secondForm.license_type_o },
        { license_type_a: user.secondForm.license_type_a },
        { license_type_b: user.secondForm.license_type_b },
        { license_type_c: user.secondForm.license_type_o }
      ],
      endorsements: [
        { endorsement_h: user.secondForm.endorsement_h },
        { endorsement_n: user.secondForm.endorsement_n },
        { endorsement_p: user.secondForm.endorsement_p },
        { endorsement_s: user.secondForm.endorsement_s },
        { endorsement_t: user.secondForm.endorsement_t },
        { endorsement_x: user.secondForm.endorsement_x },
        { endorsement_none: user.secondForm.endorsement_none }
      ],
      restrictions: [
        { restriction_e: user.secondForm.restriction_e },
        { restriction_k: user.secondForm.restriction_k },
        { restriction_l: user.secondForm.restriction_l },
        { restriction_m: user.secondForm.restriction_m },
        { restriction_n: user.secondForm.restriction_n },
        { restriction_o: user.secondForm.restriction_o },
        { restriction_p: user.secondForm.restriction_p },
        { restriction_v: user.secondForm.restriction_v },
        { restriction_x: user.secondForm.restriction_x },
        { restriction_z: user.secondForm.restriction_x },
        { restriction_none: user.secondForm.restriction_none }
      ]
    });
  }
}
