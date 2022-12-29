import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { typeField } from '../../interface/common';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import {
  FloatLabelType,
  MatFormFieldAppearance,
} from '@angular/material/form-field';
import { MatAutocompleteActivatedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'pl-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit {
  myControl = new FormControl('');

  constructor() {}

  filteredOptions: Observable<string[]> | undefined;

  @Input() classMatFormField: string | undefined;
  @Input() hintLabel: string = 'Hint label here';
  @Input() label: string = 'Text goes here';
  @Input() color: ThemePalette = 'primary';
  @Input() appearance: MatFormFieldAppearance = 'fill';
  @Input() floatLabel: FloatLabelType = 'always';
  @Input() hideRequiredMarker: boolean = false;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() ariaLabel: string | undefined;
  @Input() type: typeField = 'text';
  @Input() options: string[] = ['One', 'Two', 'Three'];
  @Input() placeholder: string = 'Placeholder goes here';

  @Output() eventClose: EventEmitter<void> = new EventEmitter<void>();
  @Output() eventOpened: EventEmitter<void> = new EventEmitter<void>();
  @Output() eventOptionActivated: EventEmitter<MatAutocompleteActivatedEvent> =
    new EventEmitter<MatAutocompleteActivatedEvent>();
  @Output() eventOptionSelected: EventEmitter<MatAutocompleteActivatedEvent> =
    new EventEmitter<MatAutocompleteActivatedEvent>();

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  onClosed(event: void) {
    this.eventClose.emit(event);
  }

  onOpened(event: void) {
    this.eventOpened.emit(event);
  }

  onOptionActivated(event: MatAutocompleteActivatedEvent) {
    this.eventOptionActivated.emit(event);
  }

  onOptionSelected(event: MatAutocompleteActivatedEvent) {
    this.eventOptionSelected.emit(event);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  public get matFormFieldclasses(): string[] {
    return [String(this.classMatFormField)];
  }
}
