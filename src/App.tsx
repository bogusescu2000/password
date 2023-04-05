import { Password } from "./components/Password";
import { Box } from "@mui/material";
import { LanguageContextProvider } from "./contexts/LanguageContext";
import { ColorModeContextProvider } from "./contexts/ColorModeContext";

const App = () => {
  return (
    <LanguageContextProvider>
      <ColorModeContextProvider>
        <Password />
      </ColorModeContextProvider>
    </LanguageContextProvider>
  );
};

export default App;
