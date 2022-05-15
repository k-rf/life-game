import { Box } from "@mui/material";

import { Board } from "~/features/life-game-player/components/Board/Board";
import { useSelector } from "~/lib/store";

export const PlayerCanvas = () => {
  const field = useSelector((state) => state.board.field);

  return (
    <Box pb={1} display="flex" justifyContent="center" lineHeight={0}>
      <Board field={field} cellSize={16} />
    </Box>
  );
};
