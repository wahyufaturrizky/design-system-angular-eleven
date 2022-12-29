import { NgModule } from '@angular/core';
import { PatternLibComponent } from './pattern-lib.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CommonModule } from '@angular/common';
import { ButtonFlatComponent } from './button-flat/button-flat.component';
import { ButtonStrokedComponent } from './button-stroked/button-stroked.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    PatternLibComponent,
    ButtonFlatComponent,
    ButtonStrokedComponent,
    AutocompleteComponent,
    InputComponent,
  ],
  imports: [
    MatButtonModule,
    CommonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports: [
    PatternLibComponent,
    ButtonFlatComponent,
    AutocompleteComponent,
    ButtonStrokedComponent,
  ],
})
export class PatternLibModule {}
