import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../models/student.model';
import { AngularFirestore } from '@angular/fire/firestore';

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

  public registerStudent() {
    console.log();
  }
}
