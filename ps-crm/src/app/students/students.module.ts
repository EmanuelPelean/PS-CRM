import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

// components
import * as fromComponents from './components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  declarations: [ ...fromComponents.components],
  exports: [...fromComponents.components],
})
export class StudentsModule {}
