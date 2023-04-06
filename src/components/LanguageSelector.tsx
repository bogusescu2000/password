import { Box, IconButton } from "@material-ui/core";
import { IconFlagFr } from "../icons/IconFlagFr";
import { IconFlagUs } from "../icons/IconFlagUs";
import { Language } from "../hooks/useTranslation";

export const LanguageSelector = ({
  setLang,
}: {
  setLang: (lang: Language) => void;
}) => {
  return (
    <Box>
      <IconButton onClick={() => setLang("fr")}>
        <IconFlagFr />
      </IconButton>
      <IconButton onClick={() => setLang("en")}>
        <IconFlagUs />
      </IconButton>
    </Box>
  );
};
