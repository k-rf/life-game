import { configureStore } from "@reduxjs/toolkit";
import { useSelector as useReduxSelector } from "react-redux";

import { reducer as boardReducer } from "~/features/life-game-player/stores/board-slice";
import { reducer as controlReducer } from "~/features/life-game-player/stores/control-slice";
import { reducer as mouseReducer } from "~/features/life-game-player/stores/mouse-slice";

export const store = configureStore({
  reducer: {
    control: controlReducer,
    board: boardReducer,
    mouse: mouseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useSelector = <T>(fn: (state: RootState) => T) => useReduxSelector<RootState, T>(fn);
