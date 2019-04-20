import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
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
    MatTooltipModule
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
    MatTooltipModule
  ]
})
export class CustomMaterialModule {}
