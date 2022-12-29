import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { moduleMetadata } from "@storybook/angular";
import { Meta, Story } from "@storybook/angular/types-6-0";
import { DialogComponent } from "projects/pattern-lib/src/lib/dialog/dialog.component";

export default {
  title: "ADL DESIGN SYSTEM/Dialog",
  component: DialogComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [BrowserModule, BrowserAnimationsModule, MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }),
  ],
} as Meta;

const Template: Story<DialogComponent> = (args: DialogComponent) => ({
  component: DialogComponent,
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {};
