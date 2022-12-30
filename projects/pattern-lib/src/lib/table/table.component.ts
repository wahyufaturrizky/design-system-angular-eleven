import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'pl-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit {
  @Input()
  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'Action',
  ];
  @Input() data: any[] = [];
  @Input() customClasses: string[] = ['full-width-table'];
  @Input() matSortActive: string = 'created';
  @Input() matSortDirection: 'desc' | 'asc' = 'desc';

  @Output() eventClickDtail: EventEmitter<any> = new EventEmitter<any>();

  dataIndexDisplayedColumns: string[] = [];

  constructor() {}

  public get classes(): string[] {
    return this.customClasses;
  }

  onClickDtail(event: any) {
    console.log('@event', event);

    this.eventClickDtail.emit(event);
  }

  ngAfterViewInit() {}
}
