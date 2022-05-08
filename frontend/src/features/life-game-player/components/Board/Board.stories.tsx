import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { Board } from "./Board";

type Meta = ComponentMeta<typeof Board>;
type Story = ComponentStoryObj<typeof Board>;

export default { title: "Features/LifeGamePlayer/Board/Board", component: Board } as Meta;

export const Default: Story = {
  args: {
    field: [
      [true, false],
      [false, true],
    ],
    cellSize: 40,
  },
};
