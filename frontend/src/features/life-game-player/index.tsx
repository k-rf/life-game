import { Box, Paper, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "~/components/Elements/Button";
import { Layout } from "~/components/Layout";
import { Board } from "~/features/life-game-player/components/Board";
import { usePlaying } from "~/features/life-game-player/hooks/usePlaying";
import { RootState } from "~/lib/store";

import { randomize, reset } from "./stores/board-slice";
import { changeStatus } from "./stores/control-slice";

export const LifeGamePlayer = () => {
  const field = useSelector((state: RootState) => state.board.field);

  const dispatch = useDispatch();

  const handleStartClick = () => {
    dispatch(changeStatus("playing"));
  };

  const handleStopClick = () => {
    dispatch(changeStatus("stopping"));
  };

  const handleRandomClick = () => {
    dispatch(randomize());
  };

  const handleResetClick = () => {
    dispatch(reset());
  };

  usePlaying();

  return (
    <Layout title="Player">
      <Box pb={1} display="flex" justifyContent="center">
        <StyledPaper>
          <Box pb={1} display="flex" justifyContent="center">
            <Board field={field} cellSize={16} />
          </Box>
          <Box pr={1} display="inline-block" />
          <Button onClick={handleStartClick}>Start</Button>
          <Box pr={1} display="inline-block" />
          <Button onClick={handleStopClick}>Stop</Button>
          <Box pr={1} display="inline-block" />
          <Button onClick={handleRandomClick}>Random</Button>
          <Box pr={1} display="inline-block" />
          <Button onClick={handleResetClick}>Reset</Button>
        </StyledPaper>
      </Box>
    </Layout>
  );
};

const StyledPaper = styled(Paper)(({ theme }) => ({
  paddingBottom: theme.spacing(1),
  margin: theme.spacing(2),
}));
