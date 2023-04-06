import { Box, IconButton } from "@material-ui/core";
import { Theme } from "@mui/material/styles";
import {
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from "@mui/icons-material";

export const ThemeSelector = ({
  theme,
  toggleMode,
}: {
  theme: Theme;
  toggleMode: () => void;
}) => {
  return (
    <Box>
      <IconButton onClick={toggleMode}>
        {theme.palette.mode === "light" ? (
          <DarkModeIcon sx={{ color: "#5cf06e" }} />
        ) : (
          <LightModeIcon sx={{ color: "#5cf06e" }} />
        )}
      </IconButton>
    </Box>
  );
};
