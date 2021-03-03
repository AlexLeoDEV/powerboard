import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';

const angularMaterialModule = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSidenavModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, angularMaterialModule],
  exports: [angularMaterialModule, CommonModule]
})
export class SharedModule {}
