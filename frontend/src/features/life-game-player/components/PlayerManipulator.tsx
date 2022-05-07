import { Box } from "@mui/material";
import { useSelector } from "react-redux";

import { ClearButton } from "~/features/life-game-player/components/BoardButton/ClearButton";
import { RandomButton } from "~/features/life-game-player/components/BoardButton/RandomButton";
import { PlayButton } from "~/features/life-game-player/components/ControlButton/PlayButton";
import { StopButton } from "~/features/life-game-player/components/ControlButton/StopButton";
import { StatusIcon } from "~/features/life-game-player/components/Icon/StatusIcon";
import { RootState } from "~/lib/store";

export const PlayerManipulator = () => {
  const status = useSelector((state: RootState) => state.control.status);

  return (
    <Box p={1} display="flex">
      <Box pr={1} display="inline-block">
        <PlayButton />
      </Box>
      <Box pr={1} display="inline-block">
        <StopButton />
      </Box>
      <Box pr={1} display="inline-block">
        <RandomButton />
      </Box>
      <Box pr={1} display="inline-block">
        <ClearButton />
      </Box>
      <Box ml="auto" display="flex" alignItems="center">
        <StatusIcon status={status} />
      </Box>
    </Box>
  );
};
