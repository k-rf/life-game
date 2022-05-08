import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { Cell } from "./Cell";

type Meta = ComponentMeta<typeof Cell>;
type Story = ComponentStoryObj<typeof Cell>;

export default { title: "Features/LifeGamePlayer/Board/Cell", component: Cell } as Meta;

export const Default: Story = {
  args: { size: 40, posX: 0, posY: 0 },
};

export const Active: Story = {
  ...Default,
  args: { ...Default.args, isActive: true },
};

export const Inactive: Story = {
  ...Default,
  args: { ...Default.args, isActive: false },
};
