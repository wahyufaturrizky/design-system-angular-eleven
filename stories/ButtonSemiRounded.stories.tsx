import { MatButtonModule } from "@angular/material/button";
import { moduleMetadata } from "@storybook/angular";
import { Meta, Story } from "@storybook/angular/types-6-0";
import { ButtonSemiRoundedComponent } from "projects/pattern-lib/src/lib/button-semi-rounded/button-semi-rounded.component";

export default {
  title: "ADL ANGULAR MATERIAL/Buttons",
  component: ButtonSemiRoundedComponent,
  argTypes: {
    label: { control: "text" },
    color: {
      options: ["primary", "accent", "warn"],
      control: { type: "radio" },
    },
    // we need to override here since in Angular it could be null as well (see button.component.ts) and therefore it would become an ambigious data type for storybook
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [MatButtonModule],
    }),
  ],
} as Meta;

const Template: Story<ButtonSemiRoundedComponent> = (
  args: ButtonSemiRoundedComponent
) => ({
  component: ButtonSemiRoundedComponent,
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  label: "Button",
  disabled: false,
  color: "primary",
};
