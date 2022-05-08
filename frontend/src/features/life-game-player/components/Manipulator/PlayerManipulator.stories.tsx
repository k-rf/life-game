import { expect } from "@storybook/jest";
import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { PlayerManipulator } from "./PlayerManipulator";

type Meta = ComponentMeta<typeof PlayerManipulator>;
type Story = ComponentStoryObj<typeof PlayerManipulator>;

export default {
  title: "Features/LifeGamePlayer/Manipulator/PlayerManipulator",
  component: PlayerManipulator,
} as Meta;

export const Default: Story = {};

export const ClickPlay: Story = {
  ...Default,
  storyName: "開始ボタンをクリックする",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByTestId("play-button"));
    await expect(await canvas.findByTestId("player-status-playing")).toBeInTheDocument();
    await expect(await canvas.findByTestId("player-status")).toHaveTextContent("再生中");
  },
};

export const ClickStop: Story = {
  ...Default,
  storyName: "停止ボタンをクリックする",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByTestId("stop-button"));
    await expect(await canvas.findByTestId("player-status-stopping")).toBeInTheDocument();
    await expect(await canvas.findByTestId("player-status")).toHaveTextContent("停止中");
  },
};
