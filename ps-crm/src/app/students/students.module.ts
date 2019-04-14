import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PapaParseModule } from 'ngx-papaparse';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './store';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';

// services
import * as fromServices from './services';
import {CustomMaterialModule} from './custom-material.module';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: fromContainers.StudentsComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    PapaParseModule,
    CustomMaterialModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('StudentsMain', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [...fromServices.services],
  declarations: [...fromComponents.components, ...fromContainers.containers],
  exports: [...fromComponents.components, ...fromContainers.containers]
})
export class StudentsModule {}
