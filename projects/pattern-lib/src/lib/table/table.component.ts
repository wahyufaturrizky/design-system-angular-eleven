import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'pl-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit {
  @Input()
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  @Input() data: any[] = [];
  @Input() customClasses: string[] = ['full-width-table'];
  @Input() matSortActive: string = 'created';
  @Input() matSortDirection: 'desc' | 'asc' = 'desc';

  dataIndexDisplayedColumns: string[] = [];

  constructor() {}

  public get classes(): string[] {
    return this.customClasses;
  }

  ngAfterViewInit() {}
}
