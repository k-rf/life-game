import { useDispatch } from "react-redux";
import { useKey } from "react-use";

import { Button } from "~/components/Elements/Button";
import { changeStatus } from "~/features/life-game-player/stores/control-slice";

export const PlayButton = () => {
  const dispatch = useDispatch();

  const handleStartClick = () => {
    dispatch(changeStatus("playing"));
  };

  useKey("p", handleStartClick);

  return <Button onClick={handleStartClick}>再生 [p]</Button>;
};
