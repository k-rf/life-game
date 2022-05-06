import React from "react";

import { Cell } from "./Cell";

const arrayEquals = (a: boolean[], b: boolean[]) => {
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
};

type Props = {
  cells: boolean[];
  size: number;
};

export const Row = React.memo(
  (props: Props) => {
    return (
      <>
        {props.cells.map((cell, i) => (
          <Cell key={i} isActive={cell} size={props.size} />
        ))}
      </>
    );
  },
  (prev, next) => {
    return arrayEquals(prev.cells, next.cells);
  }
);

Row.displayName = "Row";
