import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { PlayerManipulator } from "./PlayerManipulator";

type Meta = ComponentMeta<typeof PlayerManipulator>;
type Story = ComponentStoryObj<typeof PlayerManipulator>;

export default {
  title: "Features/LifeGamePlayer/PlayerManipulator",
  component: PlayerManipulator,
} as Meta;

export const Default: Story = {};
