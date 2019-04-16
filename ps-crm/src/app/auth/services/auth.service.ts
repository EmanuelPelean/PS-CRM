import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: string;

  constructor(private router: Router) {}

  public signupUser(email: string, password: string): void {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }

  public loginUser(email: string, password: string): void {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['/']),
          firebase
            .auth()
            .currentUser.getIdToken()
            .then(token => (this.token = token))
            .catch(err => console.log(err));
      })
      .catch(error => console.log(error));
  }

  // may return expired token, may have to implement retry functionality
  public getToken(): string {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then(token => (this.token = token))
      .catch(err => console.log(err));
    return this.token;
  }

  public isAuthenticated(): boolean {
    return this.token != null;
  }

  public logout(): void {
    firebase.auth().signOut();
    this.router.navigate(['/login']);
    this.token = null;
  }
}
