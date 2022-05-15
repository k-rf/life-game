import { Close as CloseIcon } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useKey } from "react-use";

import { Field } from "~/components/Elements/Field";
import { ClearButton } from "~/features/life-game-player/components/Manipulator/ClearButton";
import { PlayButton } from "~/features/life-game-player/components/Manipulator/PlayButton";
import { PlayerStatus } from "~/features/life-game-player/components/Manipulator/PlayerStatus";
import { RandomButton } from "~/features/life-game-player/components/Manipulator/RandomButton";
import { ResetButton } from "~/features/life-game-player/components/Manipulator/ResetButton";
import { StopButton } from "~/features/life-game-player/components/Manipulator/StopButton";
import { useManipulation } from "~/features/life-game-player/hooks/useManipulation";

export const PlayerManipulator = () => {
  const {
    state: { status, width, height },
    action,
  } = useManipulation();

  useKey("p", action.play);
  useKey("s", action.stop);
  useKey("g", action.randomize);
  useKey("c", action.clearBoard);
  useKey("r", action.resetBoard);

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
      <Box pr={1} display="inline-block">
        <ResetButton />
      </Box>
      <Box pr={1} display="inline-block" width={80}>
        <Field
          value={height}
          label="縦"
          size="small"
          type="number"
          onChange={(e) => action.changeBoardHeight(Number(e.currentTarget.value))}
        />
      </Box>
      <Box mr={1} display="flex" alignItems="center">
        <CloseIcon />
      </Box>
      <Box pr={1} display="inline-block" width={80}>
        <Field
          value={width}
          label="横"
          size="small"
          type="number"
          onChange={(e) => action.changeBoardWidth(Number(e.currentTarget.value))}
        />
      </Box>
      <Box ml="auto" display="flex" alignItems="center">
        <PlayerStatus status={status} />
      </Box>
    </Box>
  );
};
