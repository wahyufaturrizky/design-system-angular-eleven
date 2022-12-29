import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { moduleMetadata } from "@storybook/angular";
import { Meta, Story } from "@storybook/angular/types-6-0";
import { InputTextAreaComponent } from "projects/pattern-lib/src/lib/input-text-area/input-text-area.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";

export default {
  title: "ADL DESIGN SYSTEM/Input",
  component: InputTextAreaComponent,
  argTypes: {
    label: { control: "text" },
    color: {
      options: ["primary", "accent", "warn"],
      control: { type: "radio" },
    },
    colorSuffix: {
      options: ["primary", "accent", "warn"],
      control: { type: "radio" },
    },
    colorPrefix: {
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
        MatIconModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<InputTextAreaComponent> = (
  args: InputTextAreaComponent
) => ({
  component: InputTextAreaComponent,
  props: args,
});

export const TextArea = Template.bind({});
TextArea.args = {
  label: "Label goes here",
  placeholder: "Placeholder goes here",
  hintLabel: "Hint label here",
  appearance: "fill",
  color: "primary",
  colorSuffix: "primary",
  colorPrefix: "primary",
  hideRequiredMarker: false,
  disabled: false,
  required: false,
  readonly: false,
  minlength: 0,
  maxLength: 12,
  floatLabel: "always",
  type: "text",
  nameSuffixesIcon: "",
  namePrefixIcon: "",
};
