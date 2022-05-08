import { Box } from "@mui/material";
import { useKey } from "react-use";

import { StatusIcon } from "~/features/life-game-player/components/Icon/StatusIcon";
import { ClearButton } from "~/features/life-game-player/components/Manipulator/ClearButton";
import { PlayButton } from "~/features/life-game-player/components/Manipulator/PlayButton";
import { RandomButton } from "~/features/life-game-player/components/Manipulator/RandomButton";
import { StopButton } from "~/features/life-game-player/components/Manipulator/StopButton";
import { useManipulation } from "~/features/life-game-player/hooks/useManipulation";

export const PlayerManipulator = () => {
  const {
    state: { status },
    action,
  } = useManipulation();

  useKey("p", action.play);
  useKey("s", action.stop);
  useKey("g", action.randomize);
  useKey("c", action.clear);

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
