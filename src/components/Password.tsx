import React, { useState, useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { Slider } from "@material-ui/core";
import { Button, Box, Typography } from "@mui/material";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";
import { ClipBoardButton } from "./ClipBoardButton";
import { LanguageContext } from "../contexts/LanguageContext";
import { ColorModeContext } from "../contexts/ColorModeContext";
import { generatePassword } from "./../utils/generatePassword";
import { ThemeSelector } from "./ThemeSelector";
import { LanguageSelector } from "./LanguageSelector";
import { CheckBoxSelector } from "./CheckBoxSelector";

export interface OptionsState {
  upperCase: boolean;
  lowerCase: boolean;
  numbers: boolean;
  symbols: boolean;
}

export interface OptionTextType {
  type: keyof OptionsState;
  title: string;
}

export const Password: React.FC = () => {
  const [password, setPassword] = useState<string>();
  const [passwordLength, setPasswordLength] = useState<number>(5);
  const [options, setOptions] = useState<OptionsState>({
    upperCase: true,
    lowerCase: true,
    numbers: true,
    symbols: false,
  });

  const { translate, setLang } = useContext(LanguageContext);
  const { toggleMode } = useContext(ColorModeContext);
  const theme = useTheme();
  const optionText: OptionTextType[] = [
    { type: "upperCase", title: translate("uppercase") },
    { type: "lowerCase", title: translate("lowercase") },
    { type: "numbers", title: translate("numbers") },
    { type: "symbols", title: translate("symbols") },
  ];

  const handleChange = (
    e: React.ChangeEvent<{}>,
    newValue: number | number[]
  ) => {
    setPasswordLength(newValue as number);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="background.main"
    >
      <Box display="flex" alignItems="center" flexDirection="column">
        <Box
          display="flex"
          justifyContent="space-between"
          width="400px"
          padding=" 12px 20px"
          bgcolor="background.default"
        >
          <LanguageSelector setLang={setLang} />
          <ThemeSelector theme={theme} toggleMode={toggleMode} />
        </Box>
        <Typography
          variant="body1"
          margin="20px 0 10px 0"
          sx={{ fontSize: "22px" }}
        >
          {translate("passwordGenerator")}
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="400px"
          padding=" 20px 20px"
          bgcolor="background.default"
        >
          <Typography variant="body1" marginRight="100px">
            {password}
          </Typography>
          <ClipBoardButton text={password || ""} />
        </Box>
        <Box
          width="400px"
          padding=" 20px 20px"
          marginTop="20px"
          bgcolor="background.default"
        >
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body1">
              {translate("characterLength")}
            </Typography>
            <Typography sx={{ color: "#5cf06e", fontSize: "20px" }}>
              {passwordLength}
            </Typography>
          </Box>
          <Slider
            aria-label="word Length"
            value={passwordLength}
            onChange={handleChange}
            style={{ color: "#5cf06e" }}
            max={20}
            defaultValue={5}
          />
          <CheckBoxSelector
            optionText={optionText}
            setOptions={setOptions}
            options={options}
          />
          <Box marginTop="30px">
            <Button
              sx={{
                border: "1px solid #5cf06e",
                width: "100%",
                color: "#5cf06e",
                padding: "10px 0",
                textTransform: "capitalize",
              }}
              onClick={() =>
                setPassword(
                  generatePassword(Math.floor(passwordLength), options)
                )
              }
            >
              <Typography variant="body1">{translate("generate")}</Typography>
              <ArrowForwardIcon
                sx={{ fontSize: "16px", paddingLeft: "10px" }}
              />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
