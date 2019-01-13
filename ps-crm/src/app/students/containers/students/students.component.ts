import {Component} from '@angular/core';


@Component ({
  selector: 'app-students',
  templateUrl: 'students.component.html',
  styleUrls: ['students.component.less']
})

export class StudentsComponent {

  public convertFileInput(event: File) {
      console.log(event);
  }
}
