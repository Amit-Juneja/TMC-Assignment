import React, { CSSProperties } from "react";
import { Box, Typography } from "@mui/material";
import Success from "../public/success.svg";
import Image from "next/image";

const rows = [
  {
    text: "Access to Free Stories",
    firstColumn: true,
    secondColumn: true,
    thirdColumn: true,
    fourthColumn: true,
  },
  {
    text: "Telegram Channel",
    firstColumn: true,
    secondColumn: true,
    thirdColumn: true,
    fourthColumn: true,
  },
  {
    text: "TMC App to read on the go",
    firstColumn: true,
    secondColumn: true,
    thirdColumn: true,
    fourthColumn: true,
  },
  {
    text: "Unlock premium stories + newsletters",
    firstColumn: false,
    secondColumn: true,
    thirdColumn: true,
    fourthColumn: true,
  },
  {
    text: "Access to archives",
    firstColumn: true,
    secondColumn: true,
    thirdColumn: true,
    fourthColumn: true,
  },
  {
    text: "Access to subscriber Slack",
    firstColumn: false,
    secondColumn: true,
    thirdColumn: true,
    fourthColumn: true,
  },
  {
    text: "Gift stories",
    firstColumn: false,
    secondColumn: false,
    thirdColumn: true,
    fourthColumn: false,
  },
  {
    text: "Invite to subscriber only events",
    firstColumn: false,
    secondColumn: false,
    thirdColumn: true,
    fourthColumn: false,
  },
];

export default function MatrixComponent() {
  const headingsx: CSSProperties = {
    fontFamily: "Matteo",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "170%",
    letterSpacing: "0.3px",
    color: "#000000",
    alignItems: "center",
    paddingRight: "8px",
  };

  const labelsx: CSSProperties = {
    fontFamily: "Matteo",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "8px",
    lineHeight: "10px",
    color: "#FC876D",
  };

  const textsx: CSSProperties = {
    ...headingsx,
    fontSize: "14px",
    width: "35%",
  };

  const mostpopularsx: CSSProperties = {
    fontFamily: "Matteo",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "8px",
    lineHeight: "12px",
    textAlign: "center",
    color: "#FFFFFF",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        scrollSnapType: "x mandatory",
        width: "100%",
        height: "100%",
        overflowX: "scroll",
        paddingLeft: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          pt: 5,
        }}
      >
        <Box sx={{ width: "100%", paddingRight: "40%" }}></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography sx={headingsx}>FREE</Typography>
          <Typography sx={labelsx}>CREDIT CARD NOT REQUIRED</Typography>
        </Box>
        <Typography sx={headingsx}>Quarterly</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography sx={headingsx}>Annual</Typography>
          <Box
            sx={{
              background: "#2CB680",
            }}
          >
            <Typography sx={mostpopularsx}>Most popular</Typography>
          </Box>
        </Box>
        <Typography sx={headingsx}>Privilege Credits</Typography>
      </Box>
      {rows.map((row, key) => {
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
            key={key}
          >
            <Typography sx={textsx}>{row.text}</Typography>
            {row.firstColumn ? (
              <Image
                key={key}
                src={Success}
                alt="Success logo"
                style={{ width: "50px" }}
              />
            ) : (
              <Box sx={{ width: "50px" }} />
            )}
            {row.secondColumn ? (
              <Image
                src={Success}
                alt="Success logo"
                style={{ width: "50px" }}
              />
            ) : (
              <Box sx={{ width: "50px" }} />
            )}
            {row.thirdColumn ? (
              <Image
                src={Success}
                alt="Success logo"
                style={{ width: "50px" }}
              />
            ) : (
              <Box sx={{ width: "50px" }} />
            )}
            {row.fourthColumn ? (
              <Image
                src={Success}
                alt="Success logo"
                style={{ width: "50px" }}
              />
            ) : (
              <Box sx={{ width: "50px" }} />
            )}
          </Box>
        );
      })}
    </Box>
  );
}
