import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { nextGeneration } from "~/features/life-game-player/stores/board-slice";
import { RootState } from "~/lib/store";

export const usePlaying = () => {
  const status = useSelector((state: RootState) => state.control.status);
  const dispatch = useDispatch();

  const [timer, setTimer] = useState<NodeJS.Timer | undefined>(undefined);

  useEffect(() => {
    if (status === "playing") {
      timer ?? setTimer(setInterval(() => dispatch(nextGeneration()), 100));
    } else {
      timer && clearInterval(timer);
      setTimer(undefined);
    }
  }, [dispatch, status, timer]);
};
