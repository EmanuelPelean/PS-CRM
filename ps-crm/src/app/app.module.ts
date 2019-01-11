import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StudentsModule} from './students/students.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentsModule // remove when adding nested routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
