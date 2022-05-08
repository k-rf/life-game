import { Menu, MenuItem, Typography } from "@mui/material";

import { useManipulation } from "~/features/life-game-player/hooks/useManipulation";

type Props = {
  open: { mouseX: number; mouseY: number } | null;
  onClose: () => void;
};

export const ManipulationMenu = (props: Props) => {
  const {
    state: { status },
    action,
  } = useManipulation();

  const handlePlay = () => {
    action.play();
    props.onClose();
  };

  const handleStop = () => {
    action.stop();
    props.onClose();
  };

  const handleRandomize = () => {
    action.randomize();
    props.onClose();
  };

  const handleClear = () => {
    action.clear();
    props.onClose();
  };

  return (
    <Menu
      open={props.open !== null}
      onClose={props.onClose}
      anchorReference="anchorPosition"
      anchorPosition={
        props.open !== null ? { top: props.open.mouseY, left: props.open.mouseX } : undefined
      }
    >
      {status === "playing" ? (
        <MenuItem onClick={handleStop}>
          <Typography variant="body2">停止</Typography>
        </MenuItem>
      ) : (
        <MenuItem onClick={handlePlay}>
          <Typography variant="body2">再生</Typography>
        </MenuItem>
      )}
      <MenuItem onClick={handleRandomize}>
        <Typography variant="body2">ランダム生成</Typography>
      </MenuItem>
      <MenuItem onClick={handleClear}>
        <Typography variant="body2">クリア</Typography>
      </MenuItem>
    </Menu>
  );
};
