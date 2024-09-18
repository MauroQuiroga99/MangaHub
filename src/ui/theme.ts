"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
  palette: {
    primary: {
      main: "#777777",
    },
    secondary: {
      main: "#000000",
    },
  },
});

export default theme;
