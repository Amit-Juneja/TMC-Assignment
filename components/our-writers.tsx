import { Box, Typography } from "@mui/material";
import Image from "next/image";
import TMCButton from "./common/tmc-button";
import WriterImage from "../public/writer_image.svg";
import Arrow from "../public/Arrow.svg";
import { CSSProperties } from "react";

const profiles = [
  {
    headerText: "Ashish K Mishra",
    position: "Editor-in-Chief",
    location: "Mumbai",
    content:
      "Ashish writes and edits at The Morning Context. In his 14 years of journalism, Ashish has written some of the best business feature stories and co-founded India’s first subscription-only digital publication, The Ken.",
  },
  {
    headerText: "Street Smart",
    position: "Editor-in-Chief",
    location: "Mumbai",
    content:
      "Ashish writes and edits at The Morning Context. In his 14 years of journalism, Ashish has written some of the best business feature stories and co-founded India’s first subscription-only digital publication, The Ken.",
  },
];

const nameStyle: CSSProperties = {
  fontFamily: "Matteo",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "160%",
  color: "#292929",
  paddingLeft: 1,
  paddingRight: 1,
};

export default function OurWriters() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: "#F3F5FF",
        alignItems: "center",
        mt: 11,
      }}
    >
      <Typography
        sx={{
          fontFamily: "Abril Fatface",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "24px",
          lineHeight: "150%",
          color: "#051462",
          pt: 6,
        }}
      >
        Our Writers
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          scrollSnapType: "x mandatory",
          overflowX: "scroll",
          pt: 2,
        }}
      >
        {profiles.map((profile, key) => {
          return (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                scrollSnapAlign: "start",
                pl: 2.5,
                pb: 2,
              }}
              key={key}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "max-content",
                  alignItems: "center",
                }}
              >
                <Image
                  src={WriterImage}
                  alt="Street_Smart_Image"
                  style={{ width: "max-content" }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    pl: 2,
                    pr: 6,
                  }}
                >
                  <Typography>{profile.headerText}</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography>{profile.position}</Typography>
                    <Typography sx={nameStyle}>{profile.location}</Typography>
                  </Box>
                </Box>
              </Box>
              <Typography
                sx={{
                  fontFamily: "Matteo",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "160%",
                  letterSpacing: "0.3px",
                  color: "#000000",
                  pb: 1,
                  pt: 1.5,
                }}
              >
                {profile.content}
              </Typography>
              <Image key={key} src={Arrow} alt="Arrow Image" />
            </Box>
          );
        })}
      </Box>
      <TMCButton
        color="primary"
        variant="contained"
        width="70%"
        background="linear-gradient(90.97deg, #6C7AF7 0%, #A97DF1 99.9%)"
        position="relative"
        top="0"
        style={{ marginBottom: "40px", marginTop: "28px" }}
      >
        VIEW ALL WRITERS
      </TMCButton>
    </Box>
  );
}
