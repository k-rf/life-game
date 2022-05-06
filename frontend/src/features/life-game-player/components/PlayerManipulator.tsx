import { Box } from "@mui/material";

import { RandomButton } from "~/features/life-game-player/components/BoardButton/RandomButton";
import { ResetButton } from "~/features/life-game-player/components/BoardButton/ResetButton";
import { StartButton } from "~/features/life-game-player/components/ControlButton/StartButton";
import { StopButton } from "~/features/life-game-player/components/ControlButton/StopButton";

export const PlayerManipulator = () => {
  return (
    <Box p={1}>
      <StartButton />
      <Box pr={1} display="inline-block" />
      <StopButton />
      <Box pr={1} display="inline-block" />
      <RandomButton />
      <Box pr={1} display="inline-block" />
      <ResetButton />
    </Box>
  );
};
