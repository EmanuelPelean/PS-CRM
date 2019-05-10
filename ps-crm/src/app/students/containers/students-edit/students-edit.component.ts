import { Component, OnDestroy, OnInit } from '@angular/core';
import { StudentsService } from '../../services';
import { takeUntil, tap } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-students-edit',
  templateUrl: './students-edit.component.html',
  styleUrls: ['./students-edit.component.less']
})
export class StudentsEditComponent implements OnInit, OnDestroy {
  public displayUsers = false;
  public users$: Observable<Student[]>;
  private ngUnsubscribe: Subject<any> = new Subject();
  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.studentsService
      .getUsers()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((users: any[]) => {
        const listedUsers: Student[] = [];
        users.forEach(user => {
          const student = new Student();
          student.name_first = user.first_name;
          student.name_last = user.last_name;
          listedUsers.push(student);
        });
        this.users$ = of(listedUsers);
        this.displayUsers = true;
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
