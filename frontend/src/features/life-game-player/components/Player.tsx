import { Box, Paper, styled } from "@mui/material";
import React, { useState } from "react";

import { PlayerCanvas } from "~/features/life-game-player/components/Canvas/PlayerCanvs";
import { ManipulationMenu } from "~/features/life-game-player/components/Manipulator/ManipulationMenu";
import { PlayerManipulator } from "~/features/life-game-player/components/Manipulator/PlayerManipulator";
import { usePlaying } from "~/features/life-game-player/hooks/usePlaying";

export const Player = () => {
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
        <PlayerCanvas />
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
