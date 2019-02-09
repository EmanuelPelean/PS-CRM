import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatListModule
} from '@angular/material';
import { NgScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    NgScrollbarModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    NgScrollbarModule
  ]
})
export class CustomMaterialModule {}
