import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public signupUser(email: string, password: string): void {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }
}
