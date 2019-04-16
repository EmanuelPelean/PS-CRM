import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent, SignUpComponent } from './auth/components';
import {AuthGuard} from './auth/services/auth-guard.service';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'students',
    loadChildren: './students/students.module#StudentsModule',
    canActivate: [AuthGuard]
  },
  { path: 'login', component: SignInComponent },
  { path: 'signup', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
