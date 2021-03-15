import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';

const angularMaterialModule = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatRadioModule,
  MatExpansionModule,
  MatAutocompleteModule,
  MatTabsModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, angularMaterialModule, ReactiveFormsModule],
  exports: [CommonModule, angularMaterialModule, ReactiveFormsModule]
})
export class SharedModule {}
