import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';
import {RouterModule, Routes} from '@angular/router';
import {PapaParseModule} from 'ngx-papaparse';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: fromContainers.StudentsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    PapaParseModule,
    RouterModule.forChild(ROUTES),
  ],
  providers: [],
  declarations: [ ...fromComponents.components, ...fromContainers.containers],
  exports: [...fromComponents.components, ...fromContainers.containers],
})
export class StudentsModule {}
