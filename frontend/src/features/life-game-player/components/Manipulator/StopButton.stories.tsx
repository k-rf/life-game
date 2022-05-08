import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { StopButton } from "./StopButton";

type Meta = ComponentMeta<typeof StopButton>;
type Story = ComponentStoryObj<typeof StopButton>;

export default {
  title: "Features/LifeGamePlayer/Manipulator/StopButton",
  component: StopButton,
} as Meta;

export const Default: Story = {};
