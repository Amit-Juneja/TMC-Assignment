import { Box, Typography } from "@mui/material";
import { CSSProperties } from "react";
import Image from "next/image";
import Qoutes from "../public/qoutes.svg";

export default function WhatReadersSay() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 11,
      }}
    >
      <Typography
        sx={{
          fontFamily: "Abril Fatface",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "120%",
          textAlign: "center",
          color: "#000000",
        }}
      >
        What our readers say
      </Typography>
      <Typography
        sx={{
          fontFamily: "Matteo",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "15px",
          lineHeight: "150%",
          textAlign: "center",
          letterSpaing: "0.1px",
          color: "#000000",
          pt: 2,
        }}
      >
        What our readers love about TMC
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          background: "#ECFFED",
          mt: 5,
          ml: 2,
          mr: 2,
        }}
      >
        <Image
          src={Qoutes}
          alt="Qoutes"
          style={{
            position: "absolute",
            marginLeft: "14px",
            marginTop: "-16px",
          }}
        />
        <Typography
          sx={{
            fontFamily: "Matteo",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "160%",
            letterSpaing: "0.3px",
            color: "#000000",
            p: "56px 14px 15px 14px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <Typography
          sx={{
            fontFamily: "Matteo",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "150%",
            letterSpaing: "0.3px",
            color: "#7E30FF",
            pl: "14px",
            pb: "71px",
          }}
        >
          Rohan Agarwal, Editor at Reverand
        </Typography>
      </Box>
    </Box>
  );
}
