import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { ClearButton } from "./ClearButton";

type Meta = ComponentMeta<typeof ClearButton>;
type Story = ComponentStoryObj<typeof ClearButton>;

export default {
  title: "Features/LifeGamePlayer/BoardButton/ClearButton",
  component: ClearButton,
} as Meta;

export const Default: Story = {};
