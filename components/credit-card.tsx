import { Box, Typography } from "@mui/material";
import Success from "../public/success.svg";
import Image from "next/image";
import TMCButton from "./common/tmc-button";

export default function CreditCard() {
  const starterCredits = [
    "Get FREE 10 Starter Credits",
    "Use Starter Credits to unlock free stories, newsletters and long reads",
    "Starter Credits do not expire – use them as on stories of your choice",
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          background: "#FFFFFF",
          width: "90%",
          height: "100%",
          pl: 2.5,
          pr: 2.5,
          pt: 3.5,
          boxSizing: "border-box",
          border: "2px solid #6C7AF7",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Abril Fatface",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "22px",
            lineHeight: "150%",
            letterSpacing: "0.3px",
            color: "#051462",
          }}
        >
          Free 10 Starter Credits
        </Typography>
        {starterCredits.map((starterCredit) => {
          return (
            <>
              <Box
                sx={{
                  display: "flex",
                  pt: 2.5,
                  alignItems: "center",
                }}
              >
                <Image
                  src={Success}
                  alt="Success logo"
                  width={20}
                  height={20}
                />
                <Typography
                  sx={{
                    fontFamily: "Matteo",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "170%",
                    letterSpacing: "0.3px",
                    color: "#000000",
                    alignItems: "center",
                    pl: 1.5,
                  }}
                >
                  {starterCredit}
                </Typography>
              </Box>
            </>
          );
        })}
        <TMCButton
          color="primary"
          variant="contained"
          width="100%"
          background="linear-gradient(90.97deg, #6C7AF7 0%, #A97DF1 99.9%)"
          position="relative"
          top="0"
          style={{ marginTop: "40px", marginBottom: "28px" }}
        >
          SIGN UP FOR FREE
        </TMCButton>
      </Box>
    </>
  );
}
