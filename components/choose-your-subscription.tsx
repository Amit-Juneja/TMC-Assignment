import { Box, Typography } from "@mui/material";
import TMCButton from "./common/tmc-button";
import MatrixComponent from "./matrix-component";

export default function SubscribeGetBenefits() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: "#FFFFFF",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontWeight: "400",
          fontSize: "32px",
          lineHeight: "148%",
          color: "#051462",
          fontFamily: "Abril Fatface",
          textAlign: "center",
          pt: 5,
          pl: 3,
          pr: 3,
        }}
      >
        Choose your subscription
      </Typography>
      <MatrixComponent />
      <TMCButton
        color="primary"
        variant="contained"
        width="70%"
        background="linear-gradient(90.97deg, #6C7AF7 0%, #A97DF1 99.9%)"
        position="relative"
        top="0"
        style={{ marginTop: "40px", marginBottom: "48px" }}
      >
        SIGN UP
      </TMCButton>
    </Box>
  );
}
