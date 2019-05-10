import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentsEditComponent } from './students-edit/students-edit.component';
import {CalendarComponent} from './calendar/calendar.component';

export const containers: any[] = [
  StudentsComponent,
  DashboardComponent,
  RegistrationComponent,
  StudentsEditComponent,
  CalendarComponent
];

export * from './students/students.component';
export * from './dashboard/dashboard.component';
export * from './registration/registration.component';
export * from './students-edit/students-edit.component';
export * from './calendar/calendar.component';
