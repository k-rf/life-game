import { Box, ButtonBase, styled } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";

import { toggleCell } from "~/features/life-game-player/stores/board-slice";

type Props = {
  isActive?: boolean;
  isMouseDown?: boolean;
  size: number;
  posX: number;
  posY: number;
};

const StyledCell = styled((props: { className?: string } & Props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleCell({ posX: props.posX, posY: props.posY }));
  };

  return (
    <ButtonBase onClick={handleClick}>
      <Box className={props.className} display="inline-block" />
    </ButtonBase>
  );
})(({ theme, ...props }) => {
  return {
    width: props.size,
    height: props.size,
    backgroundColor: props.isActive ? theme.palette.primary.main : "#F6F7D4",
    border: `solid ${theme.palette.common.white}`,
    borderWidth: 1,
    borderRadius: 4,
  };
});

export const Cell = React.memo(StyledCell);
