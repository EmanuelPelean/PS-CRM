import { Component, OnInit } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { StudentsStateMain } from '../../store/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Student } from '../../models/student.model';

import {
  getAllStudents,
  getTotalStudents
} from '../../store/selectors/students.selectors';
import { StudentsService } from '../../services';
import {
  AddStudentsAction,
  LoadStudentsAction
} from '../../store/actions/students.actions';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-students',
  templateUrl: 'students.component.html',
  styleUrls: ['students.component.less']
})
export class StudentsComponent implements OnInit {
  students$: Observable<Student[]>;

  constructor(private papa: Papa, private store: Store<StudentsStateMain>) {}

  ngOnInit(): void {
    // this.store.dispatch(new LoadStudentsAction());
    this.students$ = this.store.select(getAllStudents);
  }

  public convertFileInput(files: FileList) {
    if (files && files.length > 0) {
      const file: File = files.item(0);
      // console.log(file.name);
      // console.log(file.size);
      // console.log(file.type);
      const reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          const csv: string = reader.result;
          const studentParseResult = this.papa.parse(csv);
          studentParseResult.data = studentParseResult.data.slice(
            1,
            studentParseResult.data.length + 1
          );
          const studentList = [];
           // TODO seek optimized conversion solution
          studentParseResult.data.map(student => {
            const newStudent = new Student();
            const genId = Math.floor(Math.random() * (999 - 100 + 1) + 100);
            newStudent.date_submitted = student[0];
            newStudent.id = student[1] + genId;
            newStudent.name_first = student[3];
            newStudent.name_last = student[4];
            newStudent.address = student[5];
            newStudent.phone = student[6];
            newStudent.email = student[7];
            newStudent.program_type = student[8];
            newStudent.course_time = student[9];
            studentList.push(newStudent);
          });
          this.store.dispatch(new AddStudentsAction({ students: studentList }));
        }
      };
    }
  }

  public unparseFile(file: any): any {
    return this.papa.unparse(file);
  }
}
