import {Component, OnInit} from '@angular/core';
import {Papa} from 'ngx-papaparse';
import {StudentsStateMain} from '../../store/reducers';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Student} from '../../models/student.model';
import {getAllStudents} from '../../store/selectors/students.selectors';


@Component ({
  selector: 'app-students',
  templateUrl: 'students.component.html',
  styleUrls: ['students.component.less']
})

export class StudentsComponent implements OnInit {

  students$: Observable<Student[]>;

  constructor(private papa: Papa,
              private store: Store<StudentsStateMain>) {
  }

  ngOnInit(): void {
    this.students$ = this.store.select(getAllStudents);
    this.students$.pipe().subscribe(value => {
      console.log('my value', value);
    });
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
          const myWorld = this.papa.parse(csv);
          myWorld.data = myWorld.data.slice(1, myWorld.data.length + 1);
        }
      };
    }
  }

  public unparseFile(file: any): any {
    return this.papa.unparse(file);
  }
}
