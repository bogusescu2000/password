import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useMemo, createContext, useEffect } from "react";
import { customTheme } from "../theme/customTheme";

interface ColorModeContextType {
  toggleMode: () => void;
}

export const ColorModeContext = createContext<ColorModeContextType>({
  toggleMode: () => {},
});

const modes = {
  LIGHT: "light",
  DARK: "dark",
} as const;

const STORAGE_KEY = "mode";

type ModeType = typeof modes[keyof typeof modes];

export const ColorModeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mode, setMode] = useState<ModeType>(
    () => (localStorage.getItem("mode") as ModeType) || modes.LIGHT
  );

  useEffect(() => {
    const storageMode = localStorage.getItem("mode");
    if (storageMode) {
      setMode(storageMode as ModeType);
    }
  }, [mode]);

  const toggleMode = (): void => {
    const newMode = mode === modes.LIGHT ? modes.DARK : modes.LIGHT;
    localStorage.setItem(STORAGE_KEY, newMode);
    setMode(newMode as ModeType);
  };

  const theme = useMemo(() => createTheme(customTheme(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={{ toggleMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
