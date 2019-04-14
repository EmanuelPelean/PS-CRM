import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: 'sign-up.component.html',
  styleUrls: ['sign-up.component.less']
})
export class SignUpComponent {

  public onSignup(form: NgForm): void {
    const email = form.value.email;
    const password = form.value.password;
  }
}
