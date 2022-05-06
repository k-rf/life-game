import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

import { Board } from "~/features/life-game-player/components/Board/Board";
import { RootState } from "~/lib/store";

export const Player = () => {
  const field = useSelector((state: RootState) => state.board.field);

  return (
    <Box pb={1} display="flex" justifyContent="center">
      <Board field={field} cellSize={16} />
    </Box>
  );
};
