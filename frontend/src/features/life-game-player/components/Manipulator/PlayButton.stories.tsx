import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { PlayButton } from "./PlayButton";

type Meta = ComponentMeta<typeof PlayButton>;
type Story = ComponentStoryObj<typeof PlayButton>;

export default {
  title: "Features/LifeGamePlayer/Manipulator/PlayButton",
  component: PlayButton,
} as Meta;

export const Default: Story = {};
