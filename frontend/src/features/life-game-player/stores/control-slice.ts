import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { z } from "zod";

import { LifeGameStatus } from "~/features/life-game-player/types";

const controlSchema = z.object({
  status: LifeGameStatus,
});

export type controlState = z.infer<typeof controlSchema>;

const initialState: controlState = { status: "stopping" };

export const controlSlice = createSlice({
  name: "control",
  initialState,
  reducers: {
    changeStatus: (state, action: PayloadAction<LifeGameStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { changeStatus } = controlSlice.actions;
export const reducer = controlSlice.reducer;
