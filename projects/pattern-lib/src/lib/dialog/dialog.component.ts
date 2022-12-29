import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'pl-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  @Output() eventChangeSecondary: EventEmitter<Event> =
    new EventEmitter<Event>();
  @Output() eventChangePrimary: EventEmitter<Event> = new EventEmitter<Event>();

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onEventChangeSecondary(event: Event) {
    this.eventChangeSecondary.emit(event);
    this.dialogRef.close();
  }

  onEventChangePrimary(event: Event) {
    this.eventChangePrimary.emit(event);
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
