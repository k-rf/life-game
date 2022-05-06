import { PlayCircleFilled as PlayIcon, StopCircleOutlined as StopIcon } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

import { LifeGameStatus } from "~/features/life-game-player/types";

const getStatus = (status: LifeGameStatus) => {
  switch (status) {
    case "playing":
      return { component: PlayIcon, text: "再生中" };
    case "stopping":
      return { component: StopIcon, text: "停止中" };
    default:
      return { component: React.Fragment, text: "編集中" };
  }
};

type Props = {
  status: LifeGameStatus;
};

export const StatusIcon = (props: Props) => {
  const { component: Icon, text } = getStatus(props.status);

  return (
    <Box color={(theme) => theme.palette.primary.main} display="flex">
      <Box mr={1} display="flex">
        <Icon />
      </Box>
      <Typography width={(theme) => theme.spacing(8)}>{text}</Typography>
    </Box>
  );
};
