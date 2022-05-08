import { Box } from "@mui/material";
import React from "react";

import { Cell } from "./Cell";

type Props = {
  cells: boolean[];
  size: number;
  posY: number;
};

export const Row = React.memo(
  (props: Props) => {
    return (
      <Box height={props.size}>
        {props.cells.map((cell, i) => (
          <Cell key={i} isActive={cell} size={props.size} posX={i} posY={props.posY} />
        ))}
      </Box>
    );
  },
  (prev, next) => {
    return JSON.stringify(prev.cells) === JSON.stringify(next.cells);
  }
);

Row.displayName = "Row";
