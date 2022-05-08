import {
  initialState,
  reducer,
  changeStatus,
} from "~/features/life-game-player/stores/control-slice";

describe("control-slice", () => {
  describe("changeStatus", () => {
    it("再生中にする", () => {
      expect(reducer(initialState, changeStatus("playing")).status).toStrictEqual("playing");
    });

    it("停止中にする", () => {
      expect(reducer(initialState, changeStatus("stopping")).status).toStrictEqual("stopping");
    });
  });
});
