import { Box, Paper, styled } from "@mui/material";
import React, { useState } from "react";

import { Layout } from "~/components/Layout";
import { ManipulationMenu } from "~/features/life-game-player/components/ManipulationMenu";
import { PlayerManipulator } from "~/features/life-game-player/components/Manipulator/PlayerManipulator";
import { Player } from "~/features/life-game-player/components/Player";
import { usePlaying } from "~/features/life-game-player/hooks/usePlaying";

export const LifeGamePlayer = () => {
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
    <Layout title="Player">
      <Box pb={1} display="flex" justifyContent="center">
        <StyledPaper onContextMenu={handleContextMenu}>
          <Player />
          <PlayerManipulator />
          <ManipulationMenu open={contextMenu} onClose={handleClose} />
        </StyledPaper>
      </Box>
    </Layout>
  );
};

const StyledPaper = styled(Paper)(({ theme }) => ({
  paddingBottom: theme.spacing(1),
  margin: theme.spacing(2),
}));
