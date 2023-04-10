import React, { SetStateAction, useContext, useEffect } from "react";
import { OptionsState } from "./Password";
import { Box, Typography } from "@mui/material";
import { LanguageContext } from "../contexts/LanguageContext";

export type StrengthType = 0 | 1 | 2 | 3 | 4;

const availableStrengths: StrengthType[] = [0, 1, 2, 3, 4];

type StrengthProps = {
  strength: StrengthType;
  setCharacterLength: React.Dispatch<SetStateAction<number>>;
  setOptions: React.Dispatch<SetStateAction<OptionsState>>;
};

export const PasswordStrength = ({
  strength,
  setCharacterLength,
  setOptions,
}: StrengthProps) => {
  const [tempStrength, setTempStrength] =
    React.useState<StrengthType>(strength);

  const translate = useContext(LanguageContext).translate;

  useEffect(() => {
    setTempStrength(strength);
  }, [strength]);

  const handleStrength = (level: StrengthType) => {
    if (level === 1) {
      setCharacterLength(8);
      setOptions({
        upperCase: true,
        lowerCase: true,
        numbers: false,
        symbols: false,
      });
    }
    if (level === 2) {
      setCharacterLength(12);
      setOptions({
        upperCase: true,
        lowerCase: true,
        numbers: false,
        symbols: false,
      });
    }
    if (level === 3) {
      setCharacterLength(16);
      setOptions({
        upperCase: true,
        lowerCase: true,
        numbers: true,
        symbols: false,
      });
    }
    if (level === 4) {
      setCharacterLength(20);
      setOptions({
        upperCase: true,
        lowerCase: true,
        numbers: true,
        symbols: true,
      });
    }
  };
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      marginTop="20px"
    >
      <Box>
        <Typography>{translate("strength")}</Typography>
      </Box>
      <Box alignItems="center" display="flex">
        <Typography variant="body1" marginRight="20px">
          {passwordStrength(tempStrength, translate)?.text}
        </Typography>

        {availableStrengths.map((level) => {
          if (level > 0)
            return (
              <Box
                key={level}
                onClick={() => handleStrength(level)}
                onMouseEnter={() => setTempStrength(level)}
                onMouseLeave={() => setTempStrength(strength)}
              >
                <Rectangle
                  color={
                    tempStrength >= level
                      ? passwordStrength(tempStrength, translate)?.color
                      : undefined
                  }
                />
              </Box>
            );
        })}
      </Box>
    </Box>
  );
};

const passwordStrength = (
  strength: StrengthType,
  translate: (key: string) => string
) => {
  switch (strength) {
    case 1:
      return { color: "#F64A4A", text: translate("weak") };
    case 2:
      return { color: "#FB7C58", text: translate("fair") };
    case 3:
      return { color: "#F8CD65", text: translate("good") };
    case 4:
      return { color: "#A4FFAF", text: translate("strong") };
  }
};

type RectangleProps = { color?: string };

const Rectangle = ({ color }: RectangleProps) => {
  const styles = color
    ? { backgroundColor: color, border: 1 }
    : { border: 1, borderColor: "#5cf06e" };

  return (
    <Box
      width="8px"
      height="20px"
      sx={{ ...styles }}
      borderRadius="2px"
      margin="5px"
    />
  );
};
