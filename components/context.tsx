import { Box, Typography } from "@mui/material";
import styles from "../styles/Home.module.css";
import TMCButton from "./common/tmc-button";

export default function Context() {
  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          position: "relative",
          mt: "25%",
        }}
      >
        <img
          src="./context_background.svg"
          alt="Context Logo"
          className={styles.contextLogo}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Matteo",
              fontWeight: 700,
              fontSize: "32px",
              lineHeight: "130%",
              textAlign: "center",
              color: "rgba(255, 255, 255, 0.9)",
              position: "absolute",
              top: "32%",
              left: "10%",
            }}
          >
            Context is everything.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Matteo",
              fontWeight: 700,
              fontSize: "24px",
              lineHeight: "130%",
              textAlign: "center",
              color: "rgba(255, 255, 255, 0.9)",
              position: "absolute",
              top: "42%",
              left: "10%",
            }}
          >
            Only read stories that matter.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Matteo",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "130%",
              textAlign: "center",
              color: "rgba(255, 255, 255, 0.9)",
              position: "absolute",
              top: "72%",
            }}
          >
            Join Now and Start Reading for FREE.
          </Typography>
          <TMCButton
            color="primary"
            variant="contained"
            width="70%"
            background="linear-gradient(90.97deg, #6C7AF7 0%, #A97DF1 99.9%)"
            position="absolute"
            top="82%"
          >
            GET STARTED
          </TMCButton>
        </Box>
      </Box>
    </>
  );
}
