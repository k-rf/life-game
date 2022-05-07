import { useDispatch } from "react-redux";
import { useKey } from "react-use";

import { Button } from "~/components/Elements/Button";
import { changeStatus } from "~/features/life-game-player/stores/control-slice";

export const StopButton = () => {
  const dispatch = useDispatch();

  const handleStopClick = () => {
    dispatch(changeStatus("stopping"));
  };

  useKey("s", handleStopClick);

  return <Button onClick={handleStopClick}>停止 [s]</Button>;
};
