import { NgModule } from '@angular/core';
import { PatternLibComponent } from './pattern-lib.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CommonModule } from '@angular/common';
import { ButtonFlatComponent } from './button-flat/button-flat.component';
import { ButtonStrokedComponent } from './button-stroked/button-stroked.component';

@NgModule({
  declarations: [
    PatternLibComponent,
    ButtonFlatComponent,
    ButtonStrokedComponent,
  ],
  imports: [MatButtonModule, CommonModule, MatIconModule],
  exports: [PatternLibComponent, ButtonFlatComponent],
})
export class PatternLibModule {}
