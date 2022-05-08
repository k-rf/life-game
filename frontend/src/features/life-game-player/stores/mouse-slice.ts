import { createSlice } from "@reduxjs/toolkit";
import { z } from "zod";

const mouseSchema = z.object({
  isDown: z.boolean().default(false),
});

export type MouseState = z.infer<typeof mouseSchema>;

const initialState: MouseState = {
  isDown: false,
};

export const mouseSlice = createSlice({
  name: "mouse",
  initialState,
  reducers: {
    mouseDown: (state) => {
      state.isDown = true;
    },
    mouseUp: (state) => {
      state.isDown = false;
    },
  },
});

export const { mouseDown, mouseUp } = mouseSlice.actions;
export const reducer = mouseSlice.reducer;
