import { Box } from "@mui/material";
import React from "react";

import { Row } from "~/features/life-game-player/components/Board/Row";

type Props = {
  field: boolean[][];
  cellSize: number;
};

export const Board = (props: Props) => {
  return (
    <Box>
      {props.field.map((row, y) => (
        <Row key={y} size={props.cellSize} cells={row} posY={y} />
      ))}
    </Box>
  );
};

Board.displayName = "Board";
