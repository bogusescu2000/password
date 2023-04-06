import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { OptionsState, OptionTextType } from "./Password";
import { Dispatch, SetStateAction } from "react";

export const CheckBoxSelector = ({
  optionText,
  setOptions,
  options,
}: {
  optionText: OptionTextType[];
  setOptions: Dispatch<SetStateAction<OptionsState>>;
  options: OptionsState;
}) => {
  return (
    <Box display="flex" flexDirection="column">
      {optionText.map((option: OptionTextType) => (
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
            label={<Typography variant="body1">{option.title}</Typography>}
          />
        </span>
      ))}
    </Box>
  );
};
