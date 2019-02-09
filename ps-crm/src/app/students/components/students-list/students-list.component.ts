import {Component, Input} from '@angular/core';
import {Student} from '../../models/student.model';

@Component({
  selector: 'app-students-list',
  templateUrl: 'students-list.component.html',
  styleUrls: ['students-list.component.less']
})
export class StudentsListComponent {
  @Input() listData: Student[];
}
