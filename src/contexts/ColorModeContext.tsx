import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useMemo, createContext, useEffect } from "react";
import { customTheme } from "../theme/customTheme";

interface ColorModeContextType {
  toggleMode: () => void;
}

export const ColorModeContext = createContext<ColorModeContextType>({
  toggleMode: () => {},
});

enum Mode {
  LIGHT = "light",
  DARK = "dark",
}

export const ColorModeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mode, setMode] = useState<Mode>(
    () => (localStorage.getItem("mode") as Mode) || Mode.LIGHT
  );

  useEffect(() => {
    const storageMode = localStorage.getItem("mode");
    if (storageMode) {
      setMode(storageMode as Mode);
    }
  }, [mode]);

  const toggleMode = (): void => {
    const newMode = mode === Mode.LIGHT ? Mode.DARK : Mode.LIGHT;
    localStorage.setItem("mode", newMode);
    setMode(newMode as Mode);
  };

  const theme = useMemo(() => createTheme(customTheme(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={{ toggleMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
