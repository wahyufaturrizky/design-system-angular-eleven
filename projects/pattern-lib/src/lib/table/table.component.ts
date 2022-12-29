import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DisplayedColumnsInterface } from '../../interface/common';

@Component({
  selector: 'pl-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit {
  @Input()
  displayedColumns: DisplayedColumnsInterface[] = [
    { sort: true, dataIndex: 'position', title: 'position' },
    { sort: false, dataIndex: 'name', title: 'name' },
    { sort: false, dataIndex: 'weight', title: 'weight' },
    { sort: false, dataIndex: 'symbol', title: 'symbol' },
  ];
  @Input() data: any[] = [];
  @Input() customClasses: string[] = ['full-width'];
  @Input() matSortActive: string = 'created';
  @Input() matSortDirection: 'desc' | 'asc' = 'desc';

  dataIndexDisplayedColumns: string[] = [];

  constructor() {}

  public get classes(): string[] {
    return this.customClasses;
  }

  ngAfterViewInit() {
    this.dataIndexDisplayedColumns = this.displayedColumns.map(
      (data: DisplayedColumnsInterface) => data.dataIndex
    );
  }
}
