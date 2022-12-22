import { NgModule } from '@angular/core';
import { PatternLibComponent } from './pattern-lib.component';
import { ButtonSemiRoundedComponent } from './button-semi-rounded/button-semi-rounded.component';

import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PatternLibComponent, ButtonSemiRoundedComponent],
  imports: [MatButtonModule, CommonModule],
  exports: [PatternLibComponent, ButtonSemiRoundedComponent],
})
export class PatternLibModule {}
