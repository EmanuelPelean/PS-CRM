import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {PapaParseModule} from 'ngx-papaparse';
import {StoreModule} from '@ngrx/store';

import { reducers } from './store/reducers';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';

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
    StoreModule.forFeature('StudentsMain', reducers),
  ],
  providers: [],
  declarations: [ ...fromComponents.components, ...fromContainers.containers],
  exports: [...fromComponents.components, ...fromContainers.containers],
})
export class StudentsModule {}
