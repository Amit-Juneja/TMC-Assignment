import { Box, Typography } from "@mui/material";
import StreetSmart from "./street-smart";
import ExploreNewsletter from "./explore-newsletter";
import OurWriters from "./our-writers";
import WhatReadersSay from "./what-readers-say";
import SubscribeGetBenefits from "./subscribe-get-benefits";
import ChooseYourSubscription from "./choose-your-subscription";

export default function PremiumNewsLetters() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: "#FFFFFF",
        width: "100%",
        height: "100%",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Abril Fatface",
          fontWeight: 400,
          fontSize: "34px",
          lineHeight: "150%",
          textAlign: "center",
          color: "#051462",
          pt: 11,
        }}
      >
        Free & Premium Newsletters
      </Typography>
      <Typography
        sx={{
          fontFamily: "Matteo",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "150%",
          textAlign: "center",
          letterSpacing: "0.3px",
          color: "#000000",
          pt: 2,
        }}
      >
        Sharp analysis by our writers and expert contributors, from big tech to
        corp governance
      </Typography>
      <StreetSmart />
      <ExploreNewsletter />
      <OurWriters />
      <WhatReadersSay />
      <SubscribeGetBenefits />
      <ChooseYourSubscription />
    </Box>
  );
}
