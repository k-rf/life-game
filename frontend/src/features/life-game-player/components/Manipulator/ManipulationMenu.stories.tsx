import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { ManipulationMenu } from "./ManipulationMenu";

type Meta = ComponentMeta<typeof ManipulationMenu>;
type Story = ComponentStoryObj<typeof ManipulationMenu>;

export default {
  title: "Features/LifeGamePlayer/Manipulator/ManipulationMenu",
  component: ManipulationMenu,
} as Meta;

export const Default: Story = {
  args: {
    open: null,
  },
};

export const Open: Story = {
  args: {
    open: { mouseX: 0, mouseY: 0 },
  },
};
