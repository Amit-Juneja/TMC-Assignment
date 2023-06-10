import { Box, Typography } from "@mui/material";
import { CSSProperties } from "react";

export default function Journalism() {
  const journalismStyle: CSSProperties = {
    fontWeight: "400",
    fontSize: "32px",
    lineHeight: "120%",
    color: "#051462",
    fontFamily: "Abril Fatface",
    textAlign: "center",
  };
  const ourMissionStyle: CSSProperties = {
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "148%",
    color: "#000000",
    fontFamily: "Merriweather",
    textAlign: "center",
    paddingTop: 2,
    paddingLeft: 7,
    paddingRight: 7,
  };
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        position: "relative",
        pt: 12,
      }}
    >
      <Typography sx={journalismStyle}>Our journalism</Typography>
      <Typography sx={ourMissionStyle}>
        Our mission is to build an independent credible media company, which
        tells stories that matter
      </Typography>
    </Box>
  );
}
