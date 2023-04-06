import { Password } from "./components/Password";
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
