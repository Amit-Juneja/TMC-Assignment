import { Box, Typography } from "@mui/material";
import Image from "next/image";
import StreetSmartImage from "../public/street_smart_image.svg";
import profileImage from "../public/profile_image.svg";
import Calendar from "../public/calendar.svg";
import { CSSProperties } from "react";
import Arrow from "../public/Arrow.svg";

const profiles = [
  {
    headerText: "Street Smart",
    firstName: "Firstname",
    lastName: "Lastname",
    publishDate: "Published Weekly",
    content:
      "Street Smart is our weekly newsletter on everything that impacts India Inc. Every Thursday, Street Smart will write an original, reported or analytical take on issues that have the potential to shake up the business ecosystem.",
  },
  {
    headerText: "Street Smart",
    firstName: "Firstname",
    lastName: "Lastname",
    publishDate: "Published Weekly",
    content:
      "Street Smart is our weekly newsletter on everything that impacts India Inc. Every Thursday, Street Smart will write an original, reported or analytical take on issues that have the potential to shake up the business ecosystem.",
  },
];

const nameStyle: CSSProperties = {
  fontFamily: "Matteo",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "17px",
  color: "#000000",
  paddingLeft: 1,
  paddingRight: 1,
};

export default function StreetSmart() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        scrollSnapType: "x mandatory",
        overflowX: "scroll",
        pt: 5,
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
                src={StreetSmartImage}
                alt="Street_Smart_Image"
                style={{ width: "max-content" }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  pl: 1,
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
                  <Image src={profileImage} alt="profile_image" />
                  <Typography sx={nameStyle}>
                    {profile.firstName} {profile.lastName}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    pt: 1.5,
                    alignItems: "center",
                  }}
                >
                  <Image src={Calendar} alt="calendar" />
                  <Typography sx={nameStyle}>{profile.publishDate}</Typography>
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
                pb: 1.5,
              }}
            >
              {profile.content}
            </Typography>
            <Image src={Arrow} alt="Arrow Image" />
          </Box>
        );
      })}
    </Box>
  );
}
