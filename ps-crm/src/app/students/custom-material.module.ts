import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule, MatInputModule,
  MatListModule, MatPaginatorModule,
  MatTableModule
} from '@angular/material';
import { NgScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    NgScrollbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    NgScrollbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatCardModule
  ]
})
export class CustomMaterialModule {}
