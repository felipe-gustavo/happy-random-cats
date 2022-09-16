import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AppLogo } from "./AppLogo";

export default {
  title: "Components/Logo",
  component: AppLogo,
  argTypes: {},
} as ComponentMeta<typeof AppLogo>;

const Template: ComponentStory<typeof AppLogo> = () => <AppLogo />;

export const Common = Template.bind({});
