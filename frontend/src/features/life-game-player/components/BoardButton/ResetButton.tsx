import { useDispatch } from "react-redux";

import { Button } from "~/components/Elements/Button";
import { reset } from "~/features/life-game-player/stores/board-slice";

export const ResetButton = () => {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(reset());
  };

  return <Button onClick={handleResetClick}>Reset</Button>;
};
