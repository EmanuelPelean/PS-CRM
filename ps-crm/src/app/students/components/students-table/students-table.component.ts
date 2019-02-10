import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Student } from '../../models/student.model';
import { SelectionModel } from '@angular/cdk/collections';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {
  filter,
  map,
  switchMap,
  takeUntil,
  takeWhile,
  tap
} from 'rxjs/operators';

@Component({
  selector: 'app-students-table',
  templateUrl: 'students-table.component.html',
  styleUrls: ['students-table.component.less']
})
export class StudentsTableComponent implements OnInit, OnDestroy {
  @Input()
  private studentsSource$: Observable<Student[]>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  private dataSource: MatTableDataSource<Student>;
  private selection: SelectionModel<Student> = new SelectionModel<Student>(true, []);
  private ngUnsubscribe: Subject<any> = new Subject<any>();
  public students: Student[];

  displayedColumns: string[] = [
    'Select',
    'Submitted',
    'First Name',
    'Last Name',
    'Program'
  ];

  ngOnInit(): void {
    this.studentsSource$
      .pipe(
        tap(students => this.studentsHandler(students)),
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe();
  }

  public studentsHandler(students: Student[]): void {
    let convertArr = students.slice(students.length - 51, students.length + 1);
    convertArr = convertArr.filter(student => student.date_submitted !== '');
    convertArr = convertArr.reverse();
    this.students = convertArr;
    this.dataSource = new MatTableDataSource<Student>(this.students);
    this.dataSource.paginator = this.paginator;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  public isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  public masterToggle(): void {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  public applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public checkSelection() {
    console.log(this.selection.selected);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
