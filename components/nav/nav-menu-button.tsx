import DehazeIcon from "@mui/icons-material/Dehaze";
import IconButton from "@mui/material/IconButton";
import { ReactElement } from "react";

export default function DesktopNavMenuButton(): ReactElement {
  const menuButtonId = "desktop-nav-menu-button";
  return (
    <IconButton
      aria-label="more"
      color="default"
      id={menuButtonId}
      size="small"
      sx={{ height: "100%" }}
    >
      <DehazeIcon />
    </IconButton>
  );
}
