import { useDispatch } from "react-redux";

import { Button } from "~/components/Elements/Button";
import { randomize } from "~/features/life-game-player/stores/board-slice";

export const RandomButton = () => {
  const dispatch = useDispatch();

  const handleRandomClick = () => {
    dispatch(randomize());
  };

  return <Button onClick={handleRandomClick}>ランダム生成</Button>;
};
