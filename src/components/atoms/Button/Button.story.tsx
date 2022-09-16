import { ComponentMeta, Story } from "@storybook/react";

import { Button, ButtonProps } from "./Button";

type InputPropOverrides = {
  text: string;
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    text: {
      control: "text",
      defaultValue: "button text",
    },
    type: {
      control: "select",
      options: ["primary", "secondary"],
      defaultValue: "primary",
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ButtonProps & InputPropOverrides> = ({
  // eslint-disable-next-line react/prop-types
  text,
  ...args
}) => <Button {...args}>{text}</Button>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
};
