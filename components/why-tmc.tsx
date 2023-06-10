import { Box, Typography } from "@mui/material";
import { CSSProperties } from "react";
import TMCCard from "./tmc-card";

export default function WhyChooseTMC() {
  const whyTMCStyle: CSSProperties = {
    fontWeight: "400",
    fontSize: "28px",
    lineHeight: "120%",
    color: "#051462",
    fontFamily: "Abril Fatface",
    textAlign: "center",
  };
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        position: "relative",
        pt: 10,
        pb: 10,
      }}
    >
      <Typography sx={whyTMCStyle}>Why choose TMC?</Typography>
      <TMCCard />
    </Box>
  );
}
