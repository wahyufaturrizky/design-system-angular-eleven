import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import {
  FloatLabelType,
  MatFormFieldAppearance,
} from '@angular/material/form-field';
import { typeField } from '../../interface/common';

@Component({
  selector: 'pl-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() customClasses: string | undefined;
  @Input() color: ThemePalette = 'primary';
  @Input() colorSuffix: ThemePalette = 'primary';
  @Input() colorPrefix: ThemePalette = 'primary';
  @Input() appearance: MatFormFieldAppearance = 'fill';
  @Input() floatLabel: FloatLabelType = 'auto';
  @Input() hideRequiredMarker: boolean = false;
  @Input() hintLabel: string = 'Hint label here';
  @Input() label: string = 'Text goes here';
  @Input() type: typeField = 'text';
  @Input() placeholder: string = 'Placeholder goes here';
  @Input() ariaLabel: string | undefined;
  @Input() formControl: FormControl = new FormControl('');
  @Input() maxLength: string | number | undefined;
  @Input() minlength: string | number = 0;
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() nameSuffixesIcon: string | null = 'search';
  @Input() namePrefixIcon: string | null = 'tune';

  constructor() {}

  ngOnInit(): void {}

  public get classes(): string[] {
    return [String(this.customClasses)];
  }
}