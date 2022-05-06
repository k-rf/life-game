import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { Player } from "./Player";

type Meta = ComponentMeta<typeof Player>;
type Story = ComponentStoryObj<typeof Player>;

export default { title: "Features/LifeGamePlayer/Player", component: Player } as Meta;

export const Default: Story = {};
