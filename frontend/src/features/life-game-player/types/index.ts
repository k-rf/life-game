import { z } from "zod";

export const LifeGameStatus = z.enum(["playing", "stopping", "editing"]);
export type LifeGameStatus = z.infer<typeof LifeGameStatus>;
