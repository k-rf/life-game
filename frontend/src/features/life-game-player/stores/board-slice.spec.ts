import {
  initialState,
  nextGeneration,
  randomize,
  reducer,
  reset,
  toggleCell,
} from "~/features/life-game-player/stores/board-slice";
import { combination } from "~/utils/combination";

describe("board-slice", () => {
  describe("togglCell", () => {
    it("非アクティブなセルはアクティブになる", () => {
      expect(
        reducer({ ...initialState, field: [[true]] }, toggleCell({ posX: 0, posY: 0 })).field
      ).toStrictEqual([[false]]);
    });

    it("アクティブなセルは非アクティブになる", () => {
      expect(
        reducer({ ...initialState, field: [[false]] }, toggleCell({ posX: 0, posY: 0 })).field
      ).toStrictEqual([[true]]);
    });
  });

  describe("nextGeneration", () => {
    type TestCase = { field: (0 | 1)[][]; expected: boolean };

    describe("ボードの境界を超えないとき", () => {
      describe("対象セルがアクティブなとき", () => {
        const cases = combination(8).map<TestCase>((bin) => {
          const sum = bin.reduce((p, c) => (p += c), Number(0));

          return {
            pattern: bin.reduce((p, c) => (p += c), ""),
            field: [
              [bin[0], bin[1], bin[2]],
              [bin[3], 1, bin[4]],
              [bin[5], bin[6], bin[7]],
            ],
            expected: sum === 2 || sum === 3,
          };
        });

        it.each<TestCase>(cases)("$pattern", ({ field, expected }) => {
          expect(
            reducer(
              { ...initialState, field: field.map((row) => row.map(Boolean)) },
              nextGeneration()
            ).field[1][1]
          ).toStrictEqual(expected);
        });
      });

      describe("対象セルが非アクティブなとき", () => {
        const cases = combination(8).map<TestCase>((bin) => {
          const sum = bin.reduce((p, c) => (p += c), Number(0));

          return {
            pattern: bin.reduce((p, c) => (p += c), ""),
            field: [
              [bin[0], bin[1], bin[2]],
              [bin[3], 0, bin[4]],
              [bin[5], bin[6], bin[7]],
            ],
            expected: sum === 3,
          };
        });

        it.each<TestCase>(cases)("$pattern", ({ field, expected }) => {
          expect(
            reducer(
              { ...initialState, field: field.map((row) => row.map(Boolean)) },
              nextGeneration()
            ).field[1][1]
          ).toStrictEqual(expected);
        });
      });
    });

    describe("ボードの境界を超えるとき", () => {
      describe("対象セルがアクティブなとき", () => {
        const cases = combination(8).map<TestCase>((bin) => {
          const sum = bin.reduce((p, c) => (p += c), Number(0));

          return {
            pattern: bin.reduce((p, c) => (p += c), ""),
            field: [
              [1, bin[0], bin[1]],
              [bin[2], bin[3], bin[4]],
              [bin[5], bin[6], bin[7]],
            ],
            expected: sum === 2 || sum === 3,
          };
        });

        it.each<TestCase>(cases)("$pattern", ({ field, expected }) => {
          expect(
            reducer(
              { ...initialState, field: field.map((row) => row.map(Boolean)) },
              nextGeneration()
            ).field[0][0]
          ).toStrictEqual(expected);
        });
      });

      describe("対象セルが非アクティブなとき", () => {
        const cases = combination(8).map<TestCase>((bin) => {
          const sum = bin.reduce((p, c) => (p += c), Number(0));

          return {
            pattern: bin.reduce((p, c) => (p += c), ""),
            field: [
              [0, bin[0], bin[1]],
              [bin[2], bin[3], bin[4]],
              [bin[5], bin[6], bin[7]],
            ],
            expected: sum === 3,
          };
        });

        it.each<TestCase>(cases)("$pattern", ({ field, expected }) => {
          expect(
            reducer(
              { ...initialState, field: field.map((row) => row.map(Boolean)) },
              nextGeneration()
            ).field[0][0]
          ).toStrictEqual(expected);
        });
      });
    });
  });

  describe("randomize", () => {
    it("指定した割合のアクティブなセルをランダムで生成する", () => {
      const count = reducer(initialState, randomize({ rate: 0.5 })).field.reduce(
        (p, row) => (p += row.map(Number).reduce((p, c) => (p += c), 0)),
        0
      );

      const total = initialState.height * initialState.width;

      // 誤差を考慮する
      expect(count).toBeGreaterThan(total * 0.45);
      expect(count).toBeLessThan(total * 0.55);
    });
  });

  describe("reset", () => {
    it("初期状態に戻す", () => {
      const beforeResetCount = reducer(initialState, randomize({ rate: 1 })).field.reduce(
        (p, row) => (p += row.map(Number).reduce((p, c) => (p += c), 0)),
        0
      );

      const total = initialState.height * initialState.width;

      expect(beforeResetCount).toStrictEqual(total);

      const afterResetCount = reducer(initialState, reset()).field.reduce(
        (p, row) => (p += row.map(Number).reduce((p, c) => (p += c), 0)),
        0
      );

      expect(afterResetCount).toStrictEqual(0);
    });
  });
});
