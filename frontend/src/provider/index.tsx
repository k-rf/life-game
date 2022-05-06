import { CssBaseline, ThemeProvider } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "~/lib/store";
import { theme } from "~/theme";

type Props = {
  children: React.ReactNode;
};

export const AppProvider = (props: Props) => {
  return (
    <ReduxProvider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {props.children}
          </ThemeProvider>
        </BrowserRouter>
      </HelmetProvider>
    </ReduxProvider>
  );
};
