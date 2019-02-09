import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild
} from '@angular/core';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-students-list',
  templateUrl: 'students-list.component.html',
  styleUrls: ['students-list.component.less']
})
export class StudentsListComponent {
  private listData: Student[];
  @Input()
  set studentsList(studentsList: Student[]) {
    let convertArr = studentsList.slice(
      studentsList.length - 50,
      studentsList.length + 1
    );
    convertArr = convertArr.filter(student => student.date_submitted !== '');
    this.listData = convertArr.reverse();
  }
}
