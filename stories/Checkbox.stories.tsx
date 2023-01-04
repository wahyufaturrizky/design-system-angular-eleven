import { MatCheckboxModule } from "@angular/material/checkbox";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { moduleMetadata } from "@storybook/angular";
import { Meta, Story } from "@storybook/angular/types-6-0";
import { CheckboxComponent } from "projects/pattern-lib/src/lib/checkbox/checkbox.component";

export default {
    title: "ADL DESIGN SYSTEM/Checkbox",
    component: CheckboxComponent,
    argTypes: {
        color: {
          options: ["primary", "accent", "warn"],
          control: { type: "radio" },
        }
      // we need to override here since in Angular it could be null as well (see button.component.ts) and therefore it would become an ambigious data type for storybook
    },
    decorators: [
      moduleMetadata({
        declarations: [],
        imports: [BrowserModule, BrowserAnimationsModule, MatCheckboxModule],
      }),
    ],
  } as Meta;

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
    component: CheckboxComponent,
    props: args,
});

export const Basic = Template.bind({});
Basic.args = {
    disabled: false,
    checked: false,
    indeterminate: false,
    labelPosition: "after",
    text: "Text goes here",
    color: "primary"
};