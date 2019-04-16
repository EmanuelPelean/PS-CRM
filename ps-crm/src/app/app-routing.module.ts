import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignUpComponent} from './auth/components';

export const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  {
    path: 'students',
    loadChildren: './students/students.module#StudentsModule'
  },
  { path: 'signup', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
