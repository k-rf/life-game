import { AppProvider } from "~/provider";
import { AppRoutes } from "~/routes";

export const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};
