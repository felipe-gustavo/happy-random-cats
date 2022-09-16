import { ComponentMeta } from "@storybook/react";

import { AppDescription } from "./AppDescription";

export default {
  title: "Components/AppDescription",
  component: AppDescription,
} as ComponentMeta<typeof AppDescription>;

export const Common = AppDescription.bind({});
