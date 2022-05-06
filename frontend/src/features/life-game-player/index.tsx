import { Box, Paper, styled } from "@mui/material";

import { Layout } from "~/components/Layout";
import { Player } from "~/features/life-game-player/components/Player";
import { PlayerManipulator } from "~/features/life-game-player/components/PlayerManipulator";
import { usePlaying } from "~/features/life-game-player/hooks/usePlaying";

export const LifeGamePlayer = () => {
  usePlaying();

  return (
    <Layout title="Player">
      <Box pb={1} display="flex" justifyContent="center">
        <StyledPaper>
          <Player />
          <PlayerManipulator />
        </StyledPaper>
      </Box>
    </Layout>
  );
};

const StyledPaper = styled(Paper)(({ theme }) => ({
  paddingBottom: theme.spacing(1),
  margin: theme.spacing(2),
}));
