import { Box } from "@mui/material";
import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import React from "react";

import { Field } from "./Field";

type Meta = ComponentMeta<typeof Field>;
type Story = ComponentStoryObj<typeof Field>;

export default { title: "Elements/Field", component: Field } as Meta;

export const Default: Story = {};

export const Size: Story = {
  args: { size: "small" },
};
export const Label: Story = {
  args: { label: "label" },
};

export const Type: Story = {
  render: (args) => {
    return (
      <>
        {wrap(<Field {...args} type="date" />)}
        {wrap(<Field {...args} type="number" />)}
        {wrap(<Field {...args} type="password" />)}
        {wrap(<Field {...args} type="search" />)}
        {wrap(<Field {...args} type="time" />)}
        {wrap(<Field {...args} type="week" />)}
      </>
    );
  },
};

const wrap = (component: React.ReactNode) => {
  return <Box p={1}>{component}</Box>;
};
