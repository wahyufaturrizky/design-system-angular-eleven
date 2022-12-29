import { NgModule } from '@angular/core';
import { PatternLibComponent } from './pattern-lib.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { CommonModule } from '@angular/common';
import { ButtonFlatComponent } from './button-flat/button-flat.component';
import { ButtonStrokedComponent } from './button-stroked/button-stroked.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { InputTextAreaComponent } from './input-text-area/input-text-area.component';
import { TableComponent } from './table/table.component';
import { MatSortModule } from '@angular/material/sort';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [
    PatternLibComponent,
    ButtonFlatComponent,
    ButtonStrokedComponent,
    AutocompleteComponent,
    InputComponent,
    InputTextAreaComponent,
    TableComponent,
    PaginatorComponent,
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
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  exports: [
    PatternLibComponent,
    ButtonFlatComponent,
    AutocompleteComponent,
    ButtonStrokedComponent,
  ],
})
export class PatternLibModule {}
