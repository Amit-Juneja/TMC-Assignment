import { Box, Typography } from "@mui/material";
import { CSSProperties } from "react";
import CollectionCard from "./collection-card";
import CreditCard from "./credit-card";
import VideoCard from "./video-card";
import PremiumNewsLetters from "./premium-newsletters";
export default function StarterCollection() {
  const starterStyle: CSSProperties = {
    fontFamily: "Abril Fatface",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "32px",
    lineHeight: "148%",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#051462",
    paddingLeft: 2,
    paddingRight: 2,
  };

  const signupStyle: CSSProperties = {
    fontFamily: "Abril Fatface",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "24px",
    lineHeight: "120%",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#051462",
    paddingLeft: 2,
    paddingRight: 2,
  };
  return (
    <>
      <Box
        sx={{
          pt: 8,
          background: "#FFFBF1",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <Typography sx={starterStyle}>
          Get access to our Starter Collection by signing up for FREE
        </Typography>
        <CollectionCard />
        <Typography sx={signupStyle}>
          Sign up now to access the Starter Collection
        </Typography>
        <CreditCard />
        <VideoCard />
        <PremiumNewsLetters />
      </Box>
    </>
  );
}
