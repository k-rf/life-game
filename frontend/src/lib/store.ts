import { configureStore } from "@reduxjs/toolkit";

import { reducer as boardReducer } from "~/features/life-game-player/stores/board-slice";
import { reducer as controlReducer } from "~/features/life-game-player/stores/control-slice";

export const store = configureStore({
  reducer: {
    control: controlReducer,
    board: boardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
