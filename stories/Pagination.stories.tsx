import { MatPaginatorModule } from "@angular/material/paginator";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { moduleMetadata } from "@storybook/angular";
import { Meta, Story } from "@storybook/angular/types-6-0";
import { PaginatorComponent } from "projects/pattern-lib/src/lib/paginator/paginator.component";

export default {
  title: "ADL DESIGN SYSTEM/Pagination",
  component: PaginatorComponent,
  argTypes: {
    matSortDirection: {
      options: ["desc", "asc"],
      control: { type: "radio" },
    },
    // we need to override here since in Angular it could be null as well (see button.component.ts) and therefore it would become an ambigious data type for storybook
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [BrowserModule, BrowserAnimationsModule, MatPaginatorModule],
    }),
  ],
} as Meta;

const Template: Story<PaginatorComponent> = (args: PaginatorComponent) => ({
  component: PaginatorComponent,
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  length: 50,
  pageSize: 10,
  pageIndex: 0,
  pageSizeOptions: [5, 10, 25],
  hidePageSize: false,
  showPageSizeOptions: false,
  showFirstLastButtons: false,
  disabled: false,
};
