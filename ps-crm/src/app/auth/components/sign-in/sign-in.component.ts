import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.less']
})
export class SignInComponent {
  constructor(private authService: AuthService) {}

  public onLogin(form: NgForm): void {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.loginUser(email, password);
  }
}
