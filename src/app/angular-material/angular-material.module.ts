import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatIconModule,
  MatTableModule,
  MatBadgeModule,
  MatDialogModule,
  MatDividerModule
} from '@angular/material';

import { CdkTableModule } from '@angular/cdk/table';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    CdkTableModule,
    MatBadgeModule,
    MatDialogModule,
    MatDividerModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    CdkTableModule,
    MatBadgeModule,
    MatDialogModule,
    MatDividerModule
  ]
})
export class AngularMaterialModule { }
