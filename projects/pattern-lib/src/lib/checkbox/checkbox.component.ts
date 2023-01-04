import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'pl-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() checked = false;
  @Input() indeterminate = false;
  @Input() labelPosition: 'before' | 'after' = 'after';
  @Input() disabled = false;
  @Input() text: string = 'Text goes here';
  @Input() color: ThemePalette = 'primary';

  constructor() { }

  ngOnInit(): void {
  }


}
