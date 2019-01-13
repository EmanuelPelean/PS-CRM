import {Component} from '@angular/core';
import {Papa} from 'ngx-papaparse';


@Component ({
  selector: 'app-students',
  templateUrl: 'students.component.html',
  styleUrls: ['students.component.less']
})

export class StudentsComponent {

  constructor(private papa: Papa) {
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
