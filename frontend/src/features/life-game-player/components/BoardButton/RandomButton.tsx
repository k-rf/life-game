import { useDispatch } from "react-redux";
import { useKey } from "react-use";

import { Button } from "~/components/Elements/Button";
import { randomize } from "~/features/life-game-player/stores/board-slice";

export const RandomButton = () => {
  const dispatch = useDispatch();

  const handleRandomClick = () => {
    dispatch(randomize());
  };

  useKey("g", handleRandomClick);

  return <Button onClick={handleRandomClick}>ランダム生成 [g]</Button>;
};
