import { Box, Paper, styled } from "@mui/material";
import React, { useState } from "react";

import { Board } from "~/features/life-game-player/components/Board/Board";
import { ManipulationMenu } from "~/features/life-game-player/components/Manipulator/ManipulationMenu";
import { PlayerManipulator } from "~/features/life-game-player/components/Manipulator/PlayerManipulator";
import { usePlaying } from "~/features/life-game-player/hooks/usePlaying";
import { useSelector } from "~/lib/store";

export const Player = () => {
  const field = useSelector((state) => state.board.field);

  const [contextMenu, setContextMenu] = useState<{ mouseX: number; mouseY: number } | null>(null);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX,
            mouseY: event.clientY,
          }
        : null
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  usePlaying();

  return (
    <Box pb={1} display="flex" justifyContent="center">
      <StyledPaper onContextMenu={handleContextMenu}>
        <Box pb={1} display="flex" justifyContent="center" lineHeight={0}>
          <Board field={field} cellSize={16} />
        </Box>
        <PlayerManipulator />
        <ManipulationMenu open={contextMenu} onClose={handleClose} />
      </StyledPaper>
    </Box>
  );
};

const StyledPaper = styled(Paper)(({ theme }) => ({
  paddingBottom: theme.spacing(1),
  margin: theme.spacing(2),
}));
