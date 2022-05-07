import { useDispatch } from "react-redux";
import { useKey } from "react-use";

import { Button } from "~/components/Elements/Button";
import { reset } from "~/features/life-game-player/stores/board-slice";

export const ClearButton = () => {
  const dispatch = useDispatch();

  const handleClearClick = () => {
    dispatch(reset());
  };

  useKey("c", handleClearClick);

  return <Button onClick={handleClearClick}>クリア [c]</Button>;
};
