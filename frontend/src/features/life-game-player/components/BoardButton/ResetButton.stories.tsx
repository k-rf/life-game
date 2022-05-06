import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { ResetButton } from "./ResetButton";

type Meta = ComponentMeta<typeof ResetButton>;
type Story = ComponentStoryObj<typeof ResetButton>;

export default {
  title: "Features/LifeGamePlayer/BoardButton/ResetButton",
  component: ResetButton,
} as Meta;

export const Default: Story = {};
