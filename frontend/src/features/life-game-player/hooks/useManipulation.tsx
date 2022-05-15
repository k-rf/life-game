import { useDispatch } from "react-redux";

import {
  randomize as randomizeAction,
  reset,
  clear,
  changeHeight,
  changeWidth,
} from "~/features/life-game-player/stores/board-slice";
import { changeStatus } from "~/features/life-game-player/stores/control-slice";
import { LifeGameStatus } from "~/features/life-game-player/types";
import { useSelector } from "~/lib/store";

type Manipulation = {
  state: { status: LifeGameStatus; width: number; height: number };
  action: {
    play: () => void;
    stop: () => void;
    randomize: () => void;
    clearBoard: () => void;
    resetBoard: () => void;
    changeBoardWidth: (value: number) => void;
    changeBoardHeight: (value: number) => void;
  };
};

export const useManipulation = (): Manipulation => {
  const status = useSelector((state) => state.control.status);
  const height = useSelector((state) => state.board.height);
  const width = useSelector((state) => state.board.width);
  const dispatch = useDispatch();

  const play = () => {
    dispatch(changeStatus("playing"));
  };

  const stop = () => {
    dispatch(changeStatus("stopping"));
  };

  const randomize = () => {
    dispatch(randomizeAction({ rate: 0.2 }));
  };

  const clearBoard = () => {
    dispatch(clear());
  };

  const resetBoard = () => {
    dispatch(reset());
  };

  const changeBoardWidth = (value: number) => {
    dispatch(changeWidth(value));
  };

  const changeBoardHeight = (value: number) => {
    dispatch(changeHeight(value));
  };

  return {
    state: { status, height, width },
    action: {
      play,
      stop,
      randomize,
      clearBoard,
      resetBoard,
      changeBoardHeight,
      changeBoardWidth,
    },
  };
};
