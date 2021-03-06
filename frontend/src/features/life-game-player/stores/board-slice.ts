import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
export const initialState: BoardState = {
  field: [...range(0, initialSize)].map(() => [...range(0, initialSize)].map(() => false)),
  width: initialSize,
  height: initialSize,
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    nextGeneration: (state) => {
      const board = state.field.map((row, y) =>
        row.map((_, x) =>
          next({
            board: state.field,
            y,
            x,
            h: state.field.length,
            w: row.length,
          })
        )
      );

      board.forEach((row, y) =>
        row.forEach((cell, x) => {
          state.field[y][x] = cell;
        })
      );
    },
    randomize: (state, action: PayloadAction<{ rate: number }>) => {
      state.field = state.field.map((row) =>
        row.map(() => (Math.random() < action.payload.rate ? true : false))
      );
    },
    clear: (state) => {
      state.field = [...range(0, state.height)].map(() =>
        [...range(0, state.width)].map(() => false)
      );
    },
    reset: (state) => {
      state.field = initialState.field;
      state.height = initialState.height;
      state.width = initialState.width;
    },
    toggleCell: (state, actions: PayloadAction<{ posX: number; posY: number }>) => {
      const { posX, posY } = actions.payload;

      state.field[posY][posX] = !state.field[posY][posX];
    },
    changeWidth: (state, action: PayloadAction<number>) => {
      let width = action.payload;

      if (width <= 0) {
        width = 1;
      }

      const newBoard = [...range(0, state.height)].map((_, y) =>
        [...range(0, width)].map((_, x) => state.field[y][x] ?? false)
      );

      state.width = width;
      state.field = newBoard;
    },
    changeHeight: (state, action: PayloadAction<number>) => {
      let height = action.payload;

      if (height <= 0) {
        height = 1;
      }

      const newBoard = [...range(0, height)].map((_, y) =>
        [...range(0, state.width)].map((_, x) => (state.field[y] ? state.field[y][x] : false))
      );

      state.height = height;
      state.field = newBoard;
    },
  },
});

export const { changeHeight, changeWidth, clear, nextGeneration, randomize, reset, toggleCell } =
  boardSlice.actions;
export const reducer = boardSlice.reducer;
