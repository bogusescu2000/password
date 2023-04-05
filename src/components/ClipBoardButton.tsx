import { Box } from "@mui/material";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import { IconButton } from "@material-ui/core";

interface ClipBoardButtonProps {
  text: string;
}

export const ClipBoardButton = ({ text }: ClipBoardButtonProps) => {
  const copyTextToClipboard = () => {
    navigator.clipboard.writeText(text);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        coor: "red",
      }}
    >
      <IconButton style={{ padding: "0" }} onClick={copyTextToClipboard}>
        <ContentCopyRoundedIcon sx={{ color: "#5cf06e" }} />
      </IconButton>
    </Box>
  );
};
