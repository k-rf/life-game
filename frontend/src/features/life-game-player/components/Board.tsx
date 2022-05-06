import { Box } from "@mui/material";

import { Row } from "~/features/life-game-player/components/Row";

type Props = {
  field: boolean[][];
  cellSize: number;
};

export const Board = (props: Props) => {
  return (
    <Box>
      {props.field.map((row, y) => (
        <Box key={y} height={props.cellSize}>
          <Row size={props.cellSize} cells={row} />
        </Box>
      ))}
    </Box>
  );
};
