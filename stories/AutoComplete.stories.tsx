import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { moduleMetadata } from "@storybook/angular";
import { Meta, Story } from "@storybook/angular/types-6-0";
import { AutocompleteComponent } from "projects/pattern-lib/src/lib/autocomplete/autocomplete.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

export default {
  title: "ADL DESIGN SYSTEM/AutoComplete",
  component: AutocompleteComponent,
  argTypes: {
    label: { control: "text" },
    color: {
      options: ["primary", "accent", "warn"],
      control: { type: "radio" },
    },
    floatLabel: {
      options: ["always", "never", "auto"],
      control: { type: "radio" },
    },
    appearance: {
      options: ["legacy", "standard", "fill", "outline"],
      control: { type: "radio" },
    },
    text: {
      options: [
        "button",
        "text",
        "checkbox",
        "color",
        "date",
        "datetime-local",
        "email",
        "file",
        "hidden",
        "image",
        "month",
        "number",
        "password",
        "radio",
        "range",
        "reset",
        "search",
        "submit",
        "text",
        "time",
        "tel",
        "url",
        "week",
      ],
      control: { type: "select" },
    },
    // we need to override here since in Angular it could be null as well (see button.component.ts) and therefore it would become an ambigious data type for storybook
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<AutocompleteComponent> = (
  args: AutocompleteComponent
) => ({
  component: AutocompleteComponent,
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  label: "Label goes here",
  placeholder: "Placeholder goes here",
  hintLabel: "Hint label here",
  appearance: "fill",
  color: "primary",
  hideRequiredMarker: false,
  disabled: false,
  required: false,
  floatLabel: "always",
  type: "text",
  options: ["One", "Two", "Three"],
};
