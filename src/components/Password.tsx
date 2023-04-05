import Typography from "@mui/material/Typography";
import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import { ClipBoardButton } from "./ClipBoardButton";
import Slider from "@material-ui/core/Slider";
import Checkbox from "@material-ui/core/Checkbox";
import { FormControlLabel } from "@material-ui/core";
import { Button, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IconFlagFR, IconFlagUS } from "material-ui-flags";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { generatePassword } from "./../utils/generatePassword";
import { LanguageContext } from "../contexts/LanguageContext";
import { ColorModeContext } from "../contexts/ColorModeContext";
import { useTheme } from "@mui/material/styles";

interface optionTextType {
  type: "upperCase" | "lowerCase" | "numbers" | "symbols";
  title: string;
}

export const Password: React.FC = () => {
  const [password, setPassword] = useState<string>();
  const [passwordLength, setPasswordLength] = useState<number>(5);
  const [options, setOptions] = useState({
    upperCase: true,
    lowerCase: true,
    numbers: true,
    symbols: false,
  });

  const { translate, setLang } = useContext(LanguageContext);
  const { toggleMode } = useContext(ColorModeContext);
  const theme = useTheme();

  const optionText: optionTextType[] = [
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
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "background.main",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: " column",
        }}
      >
        <Box
          sx={{
            backgroundColor: "background.default",
            padding: "12px 20px",
            display: "flex",
            justifyContent: "space-between",
            width: "400px",
          }}
        >
          <Box>
            <IconButton onClick={() => setLang("fr")}>
              <IconFlagFR />
            </IconButton>
            <IconButton onClick={() => setLang("en")}>
              <IconFlagUS />
            </IconButton>
          </Box>
          <Box>
            <IconButton onClick={toggleMode}>
              {theme.palette.mode === "light" ? (
                <DarkModeIcon sx={{ color: "#5cf06e" }} />
              ) : (
                <LightModeIcon sx={{ color: "#5cf06e" }} />
              )}
            </IconButton>
          </Box>
        </Box>
        <Typography
          sx={{
            color: "text.primary",
            padding: "40px 0 10px 0",
            fontSize: "20px",
          }}
        >
          {translate("passwordGenerator")}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "background.default",
            padding: "20px 20px",
            width: "400px",
          }}
        >
          <Typography sx={{ marginRight: "100px", color: "text.primary" }}>
            {password}
          </Typography>
          <ClipBoardButton text={password || ""} />
        </Box>
        <Box
          sx={{
            width: "400px",
            marginTop: "20px",
            backgroundColor: "background.default",
            padding: "20px 20px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ color: "text.primary" }}>
              {translate("characterLength")}
            </Typography>
            <Typography sx={{ color: "#5cf06e", fontSize: "20px" }}>
              {passwordLength}
            </Typography>
          </Box>
          <Slider
            aria-label="assword Length"
            value={passwordLength}
            onChange={handleChange}
            style={{ color: "#5cf06e" }}
            max={20}
            defaultValue={5}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {optionText.map((option) => (
              <span key={option.type}>
                <FormControlLabel
                  control={
                    <Checkbox
                      style={{ color: "#5cf06e" }}
                      checked={options[option.type]}
                      onClick={() =>
                        setOptions({
                          ...options,
                          [option.type]: !options[option.type],
                        })
                      }
                    />
                  }
                  label={
                    <Typography sx={{ color: "text.primary" }}>
                      {option.title}
                    </Typography>
                  }
                />
              </span>
            ))}
          </Box>
          <Box sx={{ marginTop: "30px" }}>
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
              <Typography sx={{ color: "text.primary" }}>
                {translate("generate")}
              </Typography>
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
