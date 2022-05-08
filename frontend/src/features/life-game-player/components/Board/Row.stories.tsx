import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { Row } from "./Row";

type Meta = ComponentMeta<typeof Row>;
type Story = ComponentStoryObj<typeof Row>;

export default { title: "Features/LifeGamePlayer/Board/Row", component: Row } as Meta;

export const Default: Story = {
  args: {
    cells: [true, false, true, false],
    size: 40,
    posY: 0,
  },
};
