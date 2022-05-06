import { useDispatch } from "react-redux";

import { Button } from "~/components/Elements/Button";
import { changeStatus } from "~/features/life-game-player/stores/control-slice";

export const StopButton = () => {
  const dispatch = useDispatch();

  const handleStopClick = () => {
    dispatch(changeStatus("stopping"));
  };

  return <Button onClick={handleStopClick}>停止</Button>;
};
