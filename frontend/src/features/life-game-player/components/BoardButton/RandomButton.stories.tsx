import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { RandomButton } from "./RandomButton";

type Meta = ComponentMeta<typeof RandomButton>;
type Story = ComponentStoryObj<typeof RandomButton>;

export default {
  title: "Features/LifeGamePlayer/BoardButton/RandomButton",
  component: RandomButton,
} as Meta;

export const Default: Story = {};
