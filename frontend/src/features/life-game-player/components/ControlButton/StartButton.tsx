import { useDispatch } from "react-redux";

import { Button } from "~/components/Elements/Button";
import { changeStatus } from "~/features/life-game-player/stores/control-slice";

export const StartButton = () => {
  const dispatch = useDispatch();

  const handleStartClick = () => {
    dispatch(changeStatus("playing"));
  };

  return <Button onClick={handleStartClick}>再生</Button>;
};
