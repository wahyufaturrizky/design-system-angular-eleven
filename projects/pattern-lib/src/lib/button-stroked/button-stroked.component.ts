import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'pl-button-stroked',
  templateUrl: './button-stroked.component.html',
  styleUrls: ['./button-stroked.component.scss'],
})
export class ButtonStrokedComponent implements OnInit {
  constructor() {}

  @Input() label: string | null = 'Text goes here';
  @Input() nameIcon: string | null = 'favorite';
  @Input() isIcon: boolean = false;
  @Input() isLabel: boolean = true;
  @Input() customClasses: string[] = [''];
  @Input() borderType: 'semi-rounded' | 'rounded' = 'semi-rounded';
  @Input() color: ThemePalette = 'primary';
  @Input() disabled: boolean = false;
  @Input()
  size:
    | 'mobile-small'
    | 'mobile-medium'
    | 'web-xxx-small'
    | 'web-xx-small'
    | 'web-x-small'
    | 'web-small'
    | 'web-medium' = 'web-medium';
  @Output() eventChange: EventEmitter<Event> = new EventEmitter<Event>();

  ngOnInit(): void {}

  onEventChange(event: Event) {
    this.eventChange.emit(event);
  }

  public get classes(): string[] {
    return this.customClasses;
  }

  public get paddingSizeWithLable():
    | '15px 32px'
    | '14.5px 28px'
    | '10.5px 28px'
    | '6.5px 28px'
    | '11.5px 20px'
    | '13.5px 24px'
    | '8.5px 28px' {
    switch (this.size) {
      case 'web-medium':
        return '15px 32px';
      case 'web-small':
        return '14.5px 28px';
      case 'web-x-small':
        return '10.5px 28px';
      case 'web-xx-small':
        return '8.5px 28px';
      case 'web-xxx-small':
        return '6.5px 28px';
      case 'mobile-small':
        return '11.5px 20px';
      default:
        return '13.5px 24px';
    }
  }

  public get paddingSizeWithIcon():
    | '14px'
    | '12px'
    | '8px'
    | '6px'
    | '4px'
    | '10px' {
    switch (this.size) {
      case 'web-medium':
        return '14px';
      case 'web-small':
        return '12px';
      case 'web-x-small':
        return '8px';
      case 'mobile-small':
        return '8px';
      case 'web-xx-small':
        return '6px';
      case 'web-xxx-small':
        return '4px';
      default:
        return '10px';
    }
  }

  public get borderColor(): '#2382F7' | '#F7941E' | '#FF0000' {
    switch (this.color) {
      case 'primary':
        return '#2382F7';
      case 'accent':
        return '#F7941E';
      default:
        return '#FF0000';
    }
  }

  public get lineHightSize(): '22px' | '19px' | '17px' {
    switch (this.size) {
      case 'web-medium':
        return '22px';
      case 'mobile-small' || 'mobile-medium':
        return '17px';
      default:
        return '19px';
    }
  }

  public get fontSize(): '18px' | '16px' | '14px' | '10px 24px' {
    switch (this.size) {
      case 'web-medium':
        return '18px';
      case 'mobile-small' || 'mobile-medium':
        return '14px';
      default:
        return '16px';
    }
  }
}
