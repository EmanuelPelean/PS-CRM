import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { config } from './auth/firebase-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'ps-crm';

  ngOnInit(): void {
    firebase.initializeApp(config);
  }
}
