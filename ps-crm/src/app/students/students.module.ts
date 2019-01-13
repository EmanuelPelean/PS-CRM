import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';
import {from} from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  declarations: [ ...fromComponents.components, ...fromContainers.containers],
  exports: [...fromComponents.components, ...fromContainers.containers],
})
export class StudentsModule {}
