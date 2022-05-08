import { useDispatch, useSelector } from "react-redux";

import {
  randomize as randomizeAction,
  reset,
} from "~/features/life-game-player/stores/board-slice";
import { changeStatus } from "~/features/life-game-player/stores/control-slice";
import { LifeGameStatus } from "~/features/life-game-player/types";
import { RootState } from "~/lib/store";

type Manipulation = {
  state: { status: LifeGameStatus };
  action: { play: () => void; stop: () => void; randomize: () => void; clear: () => void };
};

export const useManipulation = (): Manipulation => {
  const status = useSelector((state: RootState) => state.control.status);
  const dispatch = useDispatch();

  const play = () => {
    dispatch(changeStatus("playing"));
  };

  const stop = () => {
    dispatch(changeStatus("stopping"));
  };

  const randomize = () => {
    dispatch(randomizeAction());
  };

  const clear = () => {
    dispatch(reset());
  };

  return { state: { status }, action: { play, stop, randomize, clear } };
};