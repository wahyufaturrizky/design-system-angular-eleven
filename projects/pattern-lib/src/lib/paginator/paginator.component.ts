import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'pl-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @Input() customClasses: string[] = [''];
  @Input() length: number = 50;
  @Input() pageSize: number = 10;
  @Input() pageIndex: number = 0;
  @Input() pageSizeOptions: number[] = [5, 10, 25];
  @Input() hidePageSize: boolean = false;
  @Input() showPageSizeOptions: boolean = true;
  @Input() showFirstLastButtons: boolean = true;
  @Input() disabled: boolean = false;

  @Output() eventChangePage: EventEmitter<PageEvent> =
    new EventEmitter<PageEvent>();

  pageEvent: PageEvent | any;

  constructor() {}

  ngOnInit(): void {}

  handlePageEvent(e: PageEvent) {
    this.eventChangePage.emit(e);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }

  public get classes(): string[] {
    return this.customClasses;
  }
}
