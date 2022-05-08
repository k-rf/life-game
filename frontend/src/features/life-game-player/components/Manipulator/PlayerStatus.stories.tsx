import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { PlayerStatus } from "./PlayerStatus";

type Meta = ComponentMeta<typeof PlayerStatus>;
type Story = ComponentStoryObj<typeof PlayerStatus>;

export default {
  title: "Features/LifeGamePlayer/Manipulator/PlayerStatus",
  component: PlayerStatus,
} as Meta;

export const Default: Story = {
  args: { status: "playing" },
};

export const Playing: Story = {
  ...Default,
  args: { ...Default.args, status: "playing" },
};

export const Stopping: Story = {
  ...Default,
  args: { ...Default.args, status: "stopping" },
};
