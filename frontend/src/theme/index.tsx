import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    background: {
      default: "#D2F6C5",
    },
    common: {
      white: "#FEF5ED",
    },
    primary: {
      main: "#28DF99",
      contrastText: "#007A4B",
    },
  },
  typography: {
    fontFamily: ["Zen Kaku Gothic Antique", "sans-serif"].join(","),
  },
});
