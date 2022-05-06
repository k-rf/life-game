import { RouteObject, useRoutes } from "react-router-dom";

import { LifeGamePlayer } from "~/features/life-game-player";

export const AppRoutes = () => {
  const commonRoutes: RouteObject[] = [{ path: "/", element: <LifeGamePlayer /> }];

  const element = useRoutes([...commonRoutes]);

  return <>{element}</>;
};
