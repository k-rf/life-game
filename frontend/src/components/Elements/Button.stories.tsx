import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { Button } from "./Button";

type Meta = ComponentMeta<typeof Button>;
type Story = ComponentStoryObj<typeof Button>;

export default { title: "Elements/Button", component: Button } as Meta;

export const Default: Story = {
  args: { children: "Button", variant: "contained" },
};
