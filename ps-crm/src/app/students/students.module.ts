import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PapaParseModule } from 'ngx-papaparse';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CustomMaterialModule } from './custom-material.module';


import { reducers, effects } from './store';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';

// store-services
import * as fromServices from './services';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: fromContainers.StudentsComponent,
    children: [
      {
        path: 'registration',
        component: fromContainers.RegistrationComponent
      },
      {
        path: 'edit',
        component: fromContainers.StudentsEditComponent
      }
    ]
  }
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
