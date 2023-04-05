import { PaletteMode } from "@mui/material";

export const customTheme = (mode: PaletteMode) => ({
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
});
