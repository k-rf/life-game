import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { nextGeneration } from "~/features/life-game-player/stores/board-slice";
import { RootState } from "~/lib/store";
import { sleep } from "~/utils/sleep";

export const usePlaying = () => {
  const status = useSelector((state: RootState) => state.control.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "playing") {
      (async () => {
        // ここで await しないと、下記のエラーが発生する
        // Maximum update depth exceeded.
        // TODO: フレームレートがボードのサイズによって変わらないようにする
        await sleep(50);
        dispatch(nextGeneration());
      })();
    }
  });
};
