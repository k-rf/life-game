import { createSlice } from "@reduxjs/toolkit";
import { z } from "zod";

import { range } from "~/utils/range";

const boardSchema = z.object({
  field: z.array(z.array(z.boolean())),
  width: z.number().positive(),
  height: z.number().positive(),
});

export type BoardState = z.infer<typeof boardSchema>;

const next = ({
  board,
  y,
  x,
  h,
  w,
}: {
  board: boolean[][];
  y: number;
  x: number;
  h: number;
  w: number;
}) => {
  // prettier-ignore
  const neighbors = [
    [-1, -1], [0, -1], [1, -1],
    [-1,  0],          [1,  0],
    [-1,  1], [0,  1], [1,  1],
  ];

  const d = (num: number, max: number) => {
    return num < 0 ? max - 1 : max <= num ? 0 : num;
  };

  const activeCount = neighbors
    .map(([dx, dy]) => board[d(y + dy, h)][d(x + dx, w)])
    .map((e) => Number(e))
    .reduce((p, c) => (p += c), 0);

  if (board[y][x]) {
    if (activeCount === 2 || activeCount === 3) {
      return true;
    } else {
      return false;
    }
  } else {
    if (activeCount === 3) {
      return true;
    } else {
      return false;
    }
  }
};

const initialSize = 50;
const initialState: BoardState = {
  field: [...range(0, initialSize)].map(() => [...range(0, initialSize)].map(() => false)),
  width: initialSize,
  height: initialSize,
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    nextGeneration: (state) => {
      const board = Array.from(state.field.map((row) => Array.from(row)));

      state.field.forEach((row, y) =>
        row.forEach((_, x) => {
          board[y][x] = next({
            board: state.field,
            y,
            x,
            h: state.field.length,
            w: row.length,
          });
        })
      );

      board.forEach((row, y) =>
        row.forEach((_, x) => {
          state.field[y][x] = board[y][x];
        })
      );
    },
    randomize: (state) => {
      state.field = state.field.map((row) => row.map(() => (Math.random() < 0.3 ? true : false)));
    },
    reset: (state) => {
      state.field = initialState.field;
      state.height = initialState.height;
      state.width = initialState.width;
    },
  },
});

export const { nextGeneration, randomize, reset } = boardSlice.actions;
export const reducer = boardSlice.reducer;
