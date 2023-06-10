import { Box, Button, Grid, Typography } from "@mui/material";
import { CSSProperties } from "react";
import TMCButton from "./common/tmc-button";
export default function ExploreNewsletter() {
  const buttonsx: CSSProperties = {
    background: "#FFFFFF",
    border: "0.75px solid #7B8FFE",
    borderRadius: "40px",
    fontStyle: "normal",
    textTransform: "none",
    gap: "10px",
    marginRight: 2,
    marginBottom: 1.5,
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontWeight: "400",
          fontSize: "24px",
          lineHeight: "150%",
          color: "#051462",
          fontFamily: "Abril Fatface",
          textAlign: "center",
        }}
      >
        Explore newsletters on
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button sx={buttonsx}>Internet</Button>
          <Button sx={buttonsx}>Business</Button>
          <Button sx={buttonsx}>Chaos</Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button sx={buttonsx}>Sports</Button>
          <Button sx={buttonsx}>Economics</Button>
          <Button sx={buttonsx}>Legal</Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button sx={buttonsx}>Science</Button>
          <Button sx={buttonsx}>Govt Policy</Button>
        </Box>
      </Box>
      <TMCButton
        color="primary"
        variant="contained"
        width="70%"
        background="linear-gradient(90.97deg, #6C7AF7 0%, #A97DF1 99.9%)"
        position="relative"
        top="0"
        style={{ marginTop: "12px" }}
      >
        SIGN UP TO SUBSCRIBE
      </TMCButton>
    </Box>
  );
}
