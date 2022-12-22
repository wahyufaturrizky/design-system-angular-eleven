import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { moduleMetadata } from "@storybook/angular";
import { Meta, Story } from "@storybook/angular/types-6-0";
import { ButtonFlatComponent } from "projects/pattern-lib/src/lib/button-flat/button-flat.component";

export default {
  title: "ADL DESIGN SYSTEM/Buttons",
  component: ButtonFlatComponent,
  argTypes: {
    label: { control: "text" },
    color: {
      options: ["primary", "accent", "warn"],
      control: { type: "radio" },
    },
    size: {
      options: [
        "mobile-small",
        "mobile-medium",
        "web-xxx-small",
        "web-xx-small",
        "web-x-small",
        "web-small",
        "web-medium",
      ],
      control: { type: "radio" },
    },
    borderType: {
      options: ["semi-rounded", "rounded"],
      control: { type: "radio" },
    },
    // we need to override here since in Angular it could be null as well (see button.component.ts) and therefore it would become an ambigious data type for storybook
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [MatButtonModule, MatIconModule],
    }),
  ],
} as Meta;

const Template: Story<ButtonFlatComponent> = (args: ButtonFlatComponent) => ({
  component: ButtonFlatComponent,
  props: args,
});

export const Flat = Template.bind({});
Flat.args = {
  label: "Button",
  disabled: false,
  isIcon: false,
  isLabel: true,
  color: "primary",
  size: "web-medium",
  borderType: "semi-rounded",
  nameIcon: "favorite",
};
