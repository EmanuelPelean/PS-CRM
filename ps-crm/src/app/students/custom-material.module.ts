import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatStepperModule,
  MatTableModule,
  MatTooltipModule
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
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatRippleModule,
    MatSelectModule,
    MatTooltipModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule
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
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatRippleModule,
    MatSelectModule,
    MatTooltipModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class CustomMaterialModule {}
