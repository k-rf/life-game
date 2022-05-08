import { range } from "~/utils/range";

type Binary = 0 | 1;

export const combination = (num: number) =>
  [...range(0, Math.pow(2, num))].map((i) =>
    [...range(0, num)].map<0 | 1>((j) => ((i >> j) & 1) as Binary)
  );
