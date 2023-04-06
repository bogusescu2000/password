import { PaletteMode, createTheme } from "@mui/material";

export const customTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      text: {
        ...(mode === "light"
          ? {
              primary: "#000",
            }
          : {
              primary: "#fff",
            }),
      },
      background: {
        ...(mode === "light"
          ? {
              default: "#F4EAD5",
              main: "#FFFBE9",
            }
          : {
              default: "#24232B",
              main: "#000",
            }),
      },
    },
    typography: {
      body1: {
        color: mode === "light" ? "#000" : "#fff",
      },
    },
  });
