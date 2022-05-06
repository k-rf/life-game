import { Box, styled } from "@mui/material";
import React from "react";

type Props = {
  isActive?: boolean;
  size: number;
};

const StyledCell = styled((props: { className?: string } & Props) => {
  return <Box className={props.className} display="inline-block" />;
})(({ theme, ...props }) => {
  return {
    width: props.size,
    height: props.size,
    backgroundColor: props.isActive ? "#28DF99" : "#F6F7D4",
    border: `solid ${theme.palette.common.white}`,
    borderWidth: 1,
    borderRadius: 4,
  };
});

export const Cell = React.memo(StyledCell);
