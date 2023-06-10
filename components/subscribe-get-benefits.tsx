import { Box, Typography } from "@mui/material";
import CollectionCard from "./collection-card";
import Image from "next/image";
import PlusSign from "../public/plus_sign.svg";
import ThingsChange from "../public/things_change.svg";
import OverSize from "../public/oversize.svg";
import Friction from "../public/friction.svg";
import LastImage from "../public/last_image.svg";

const icons = [ThingsChange, OverSize, Friction, LastImage];

export default function SubscribeGetBenefits() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: "#F3F5FF",
        mt: 11,
      }}
    >
      <Typography
        sx={{
          fontFamily: "Abril Fatface",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "32px",
          lineHeight: "148%",
          textAlign: "center",
          color: "#051462",
          pt: 8,
          pl: 8,
          pr: 8,
        }}
      >
        Subscribe and get exclusive benefits
      </Typography>
      <Typography
        sx={{
          fontFamily: "Matteo",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "24px",
          lineHeight: "160%",
          textAlign: "center",
          letterSpacing: "0.3px",
          color: "#000000",
          pt: 5,
        }}
      >
        Get access to exclusive stories
      </Typography>
      <Typography
        sx={{
          fontFamily: "Matteo",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "160%",
          textAlign: "center",
          letterSpacing: "0.3px",
          color: "#000000",
          p: "8px 16px 20px 16px",
        }}
      >
        Subscribe and get full access to all stories across our three pillars:
        Business, Internet and Chaos
      </Typography>
      <CollectionCard />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 7,
        }}
      >
        <Image src={PlusSign} alt="plus_sign" />
        <Typography
          sx={{
            fontFamily: "Matteo",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "160%",
            textAlign: "center",
            letterSpacing: "0.3px",
            color: "#000000",
            pt: 5,
            pl: 4,
            pr: 4,
          }}
        >
          Get access to Premium Newsletters
        </Typography>
        <Typography
          sx={{
            fontFamily: "Matteo",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "160%",
            textAlign: "center",
            letterSpacing: "0.3px",
            color: "#000000",
            pt: 1,
            pl: 2,
            pr: 2,
          }}
        >
          Subscribe and get full access to all newsletters
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            scrollSnapType: "x mandatory",
            overflowX: "scroll",
            pt: 2.5,
            pl: 2.5,
            pb: 5,
          }}
        >
          {icons.map((icon, key) => {
            return (
              <Image
                key={key}
                src={icon}
                alt={icon}
                style={{ paddingRight: "36px" }}
              />
            );
          })}
        </Box>
        <Image
          src={PlusSign}
          alt="plus_sign"
          style={{ marginBottom: "40px" }}
        />
      </Box>
    </Box>
  );
}
