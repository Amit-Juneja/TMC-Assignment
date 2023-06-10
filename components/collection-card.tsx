import { Box, Typography } from "@mui/material";
import { CSSProperties } from "react";
import Image from "next/image";
import internetImage from "../public/internet.svg";
import businessImage from "../public/business.svg";
import profileImage from "../public/profile_image.svg";
import SaveIcon from "../public/save-collection.svg";
import Plus from "../public/plus.svg";

const saveIconSize = 20;
const icons = [
  {
    name: "internet",
    image: internetImage,
    profileImage: profileImage,
    firstName: "Firstname",
    lastName: "Lastname",
    headerText: "Why rebel foods is alive and kicking",
    contentText:
      "Detractors had predicted its death but the company behind brands such as Faasos, Behrouz Biryani and Mandarin Oak has proved them wrong",
    labelColor: "#FC876D",
  },
  {
    name: "business",
    image: businessImage,
    profileImage: profileImage,
    firstName: "Firstname",
    lastName: "Lastname",
    headerText: "Fantasy gaming's trial by fire",
    contentText:
      "So far there has been a lot of talk about potential, but very little money is actually being made-and mostly by only one company",
    labelColor: "#2CB680",
  },
];

const labelStyle: CSSProperties = {
  fontFamily: "Matteo",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "13px",
  lineHeight: "16px",
  display: "flex",
  alignItems: "center",
  letterSpacing: "0.5px",
  textTransform: "uppercase",
  marginBottom: 1.5,
};

const headerStyle: CSSProperties = {
  fontFamily: "Matteo",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "26px",
  lineHeight: "148%",
  color: "#000000",
};

const contentStyle: CSSProperties = {
  fontFamily: "Matteo",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "150%",
  letterSpacing: "0.3px",
  color: "#292929",
};

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

export default function CollectionCard() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        scrollSnapType: "x mandatory",
        overflowX: "scroll",
      }}
    >
      {icons.map((icon, key) => {
        return (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                scrollSnapAlign: "start",
                pl: 2.5,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "self-start",
                }}
              >
                <Typography sx={{ ...labelStyle, color: icon.labelColor }}>
                  {icon.name}
                </Typography>
                <Image
                  src={SaveIcon}
                  alt="Save Icon"
                  width={saveIconSize}
                  height={saveIconSize}
                />
              </Box>
              <Image
                src={icon.image}
                alt="collection_image"
                style={{ width: "max-content" }}
              />
              <Typography sx={headerStyle}>{icon.headerText}</Typography>
              <Typography sx={contentStyle}>{icon.contentText}</Typography>
              <Box
                sx={{
                  border: "1px solid #907CFF",
                  mt: 1,
                  width: "60px",
                  height: 0,
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pt: 2,
                }}
              >
                <Image
                  src={icon.profileImage}
                  alt="profile_image"
                  style={{ width: "max-content" }}
                />
                <Typography sx={nameStyle}>
                  {icon.firstName} {icon.lastName}
                </Typography>
                <Image
                  src={Plus}
                  alt="plus_image"
                  style={{ width: "max-content" }}
                />
              </Box>
              <Typography
                sx={{
                  fontFamily: "Matteo",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "14px",
                  color: "#292929",
                  pt: 1,
                }}
              >
                10 July 2020
              </Typography>
            </Box>
          </>
        );
      })}
    </Box>
  );
}
