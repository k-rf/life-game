import { PlayCircleFilled as PlayIcon, StopCircleOutlined as StopIcon } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

import { LifeGameStatus } from "~/features/life-game-player/types";

const getStatus = (status: LifeGameStatus) => {
  switch (status) {
    case "playing":
      return { component: <PlayIcon data-testid="player-status-playing" />, text: "再生中" };
    case "stopping":
      return { component: <StopIcon data-testid="player-status-stopping" />, text: "停止中" };
  }
};

type Props = {
  status: LifeGameStatus;
};

export const PlayerStatus = (props: Props) => {
  const { component: Icon, text } = getStatus(props.status);

  return (
    <Box color={(theme) => theme.palette.primary.main} display="flex" data-testid="player-status">
      <Box mr={1} display="flex">
        {Icon}
      </Box>
      <Typography width={(theme) => theme.spacing(8)}>{text}</Typography>
    </Box>
  );
};
