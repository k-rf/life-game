import { combination } from "~/utils/combination";

describe("combination", () => {
  it("combination(0)", () => {
    expect(combination(0)).toStrictEqual([[]]);
  });

  it("combination(1)", () => {
    expect(combination(1)).toStrictEqual([[0], [1]]);
  });

  it("combination(2)", () => {
    expect(combination(2)).toStrictEqual([
      [0, 0],
      [1, 0],
      [0, 1],
      [1, 1],
    ]);
  });
});
