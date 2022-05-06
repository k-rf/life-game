import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { StartButton } from "./StartButton";

type Meta = ComponentMeta<typeof StartButton>;
type Story = ComponentStoryObj<typeof StartButton>;

export default {
  title: "Features/LifeGamePlayer/ControlButton/StartButton",
  component: StartButton,
} as Meta;

export const Default: Story = {};
