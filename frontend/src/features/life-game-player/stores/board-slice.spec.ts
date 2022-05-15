import { renderHook } from "@testing-library/react-hooks";

import {
  changeHeight,
  changeWidth,
  clear,
  initialState,
  nextGeneration,
  randomize,
  reducer,
  reset,
  toggleCell,
} from "~/features/life-game-player/stores/board-slice";
import { useSelector } from "~/lib/store";
import { AppProvider } from "~/provider";
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
      const { result } = renderHook(() => useSelector((state) => state.board), {
        wrapper: AppProvider,
      });

      const beforeResetCount = reducer(initialState, randomize({ rate: 1 })).field.reduce(
        (p, row) => (p += row.map(Number).reduce((p, c) => (p += c), 0)),
        0
      );

      const total = initialState.height * initialState.width;

      expect(beforeResetCount).toStrictEqual(total);

      const afterResetCount = reducer(result.current, reset()).field.reduce(
        (p, row) => (p += row.map(Number).reduce((p, c) => (p += c), 0)),
        0
      );

      expect(afterResetCount).toStrictEqual(0);
    });
  });

  describe("clear", () => {
    it("セルの状態をクリアする", () => {
      const randomizedState = reducer(initialState, randomize({ rate: 1 }));

      const total = initialState.height * initialState.width;

      expect(
        randomizedState.field.reduce(
          (p, row) => (p += row.map(Number).reduce((p, c) => (p += c), 0)),
          0
        )
      ).toStrictEqual(total);

      const clearedState = reducer(randomizedState, clear());

      expect(
        clearedState.field.reduce(
          (p, row) => (p += row.map(Number).reduce((p, c) => (p += c), 0)),
          0
        )
      ).toStrictEqual(0);
    });
  });

  describe("changeWidth", () => {
    describe("ボードの幅を変更する", () => {
      it("正の数のとき、正しく更新される", () => {
        const result = reducer(initialState, changeWidth(20));

        expect(result.width).toStrictEqual(20);
        expect(result.field[0].length).toStrictEqual(20);
      });

      it.each([0, -42])("%s のとき、1 に設定する", (a) => {
        const result = reducer(initialState, changeWidth(a));

        expect(result.width).toStrictEqual(1);
        expect(result.field[0].length).toStrictEqual(1);
      });
    });
  });

  describe("changeHeight", () => {
    describe("ボードの高さを変更する", () => {
      it("正の数のとき、正しく更新される", () => {
        const result = reducer(initialState, changeHeight(20));

        expect(result.height).toStrictEqual(20);
        expect(result.field.length).toStrictEqual(20);
      });

      it.each([0, -42])("%s のとき、1 に設定する", (a) => {
        const result = reducer(initialState, changeHeight(a));

        expect(result.height).toStrictEqual(1);
        expect(result.field.length).toStrictEqual(1);
      });
    });
  });
});
