import { Box, Typography } from "@mui/material";
import { CSSProperties } from "react";
import Dialogue from "../public/dialogue.svg";
import Information from "../public/information.svg";
import Journalism from "../public/journalism.svg";
import Newsletter from "../public/newsletter.svg";
import Image from "next/image";

const icons = [
  {
    id: 1,
    image: Information,
    headerText: "Information and analysis you won't find anywhere else",
    contentText:
      "We publish the best writing in India across three categories—internet, business and chaos.",
  },
  {
    id: 2,
    image: Journalism,
    headerText: "Independent and unbiased journalism",
    contentText:
      "We are building a credible media company which tells stories that matter. Paid for by the readers.",
  },
  {
    id: 3,
    image: Newsletter,
    headerText: "Premium newsletters",
    contentText:
      "Read what is new in big tech, corporate governance and the world, in general from some of the top writers in the country.",
  },
  {
    id: 4,
    image: Dialogue,
    headerText: "TMC Dialogues",
    contentText: "Be a part of exclusive The Morning Context community.",
  },
];

export default function TMCCard() {
  const iconSize = 35;
  const headingStyle: CSSProperties = {
    fontFamily: "Matteo",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "140%",
    letterSpacing: "0.3px",
    color: "#000000",
  };

  const contentStyle: CSSProperties = {
    fontFamily: "Matteo",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "150%",
    letterSpacing: "0.3px",
    color: "rgba(0, 0, 0, 0.9)",
    opacity: 0.85,
  };
  return (
    <>
      {icons.map((icon, key) => {
        return (
          <Box
            sx={{
              position: "relative",
              background: "#F3F5FF",
              gap: "12px",
              p: "16px",
              m: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
            key={key}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Image
                src={icon.image}
                alt="tmc_image"
                width={iconSize}
                height={iconSize}
                style={{ marginRight: "10px", marginTop: "8px" }}
              />
              <Typography sx={headingStyle}>{icon.headerText}</Typography>
            </Box>
            <Typography sx={contentStyle}>{icon.contentText}</Typography>
          </Box>
        );
      })}
    </>
  );
}
