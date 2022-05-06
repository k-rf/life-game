import { Box } from "@mui/material";
import { useSelector } from "react-redux";

import { RandomButton } from "~/features/life-game-player/components/BoardButton/RandomButton";
import { ResetButton } from "~/features/life-game-player/components/BoardButton/ResetButton";
import { StartButton } from "~/features/life-game-player/components/ControlButton/StartButton";
import { StopButton } from "~/features/life-game-player/components/ControlButton/StopButton";
import { StatusIcon } from "~/features/life-game-player/components/Icon/StatusIcon";
import { RootState } from "~/lib/store";

export const PlayerManipulator = () => {
  const status = useSelector((state: RootState) => state.control.status);

  return (
    <Box p={1} display="flex">
      <Box pr={1} display="inline-block">
        <StartButton />
      </Box>
      <Box pr={1} display="inline-block">
        <StopButton />
      </Box>
      <Box pr={1} display="inline-block">
        <RandomButton />
      </Box>
      <Box pr={1} display="inline-block">
        <ResetButton />
      </Box>
      <Box ml="auto" display="flex" alignItems="center">
        <StatusIcon status={status} />
      </Box>
    </Box>
  );
};
