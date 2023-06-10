import { CSSProperties, ReactElement } from "react";
import useIsMobile from "@/utils/useIsMobile";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import FooterLogo from "../public/footer_logo.svg";
import FacebookLogo from "../public/facebook.svg";
import TwitterLogo from "../public/Twitter.svg";
import LinkedinLogo from "../public/Linkedin.svg";
import InstagramLogo from "../public/instagram.svg";
import YoutubeLogo from "../public/Youtube.svg";

export default function Footer(): ReactElement {
  const footerLogoSize = 150;
  const iconSize = 18;
  const isMobile = useIsMobile();
  const mainFooter: CSSProperties = {
    backgroundColor: "#363839",
    display: "flex",
    flexDirection: "column",
  };

  const typographyStyle: CSSProperties = {
    fontFamily: "Matteo",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "22px",
    textAlign: "center",
    color: "#FFFFFF",
  };

  const headingStyle: CSSProperties = {
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "22px",
    color: "#FFFFFF",
    fontFamily: "Matteo",
  };

  const itemStyle: CSSProperties = {
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "150%",
    color: "#FFFFFF",
    fontFamily: "Matteo",
    letterSpacing: "0.1px",
  };

  const blog = [
    {
      name: "The Morning Context Blog - On the record",
      weight: "400",
      size: "14px",
      lineHeight: "150%",
      color: "#FFFFFF",
      letterSpacing: "0.1px",
    },
    {
      name: "TMC Subscriber App",
      weight: "400",
      size: "14px",
      lineHeight: "150%",
      color: "#FFFFFF",
      letterSpacing: "0.1px",
    },
    {
      name: "",
      weight: "400",
      size: "14px",
      lineHeight: "150%",
      color: "#FFFFFF",
      letterSpacing: "0.1px",
    },
    {
      name: "Collaborate",
      weight: "400",
      size: "14px",
      lineHeight: "150%",
      color: "#FFFFFF",
      letterSpacing: "0.1px",
    },
    {
      name: "Contact Us",
      weight: "400",
      size: "14px",
      lineHeight: "150%",
      color: "#FFFFFF",
      letterSpacing: "0.1px",
    },
    {
      name: "FAQs",
      weight: "400",
      size: "14px",
      lineHeight: "150%",
      color: "#FFFFFF",
      letterSpacing: "0.1px",
    },
  ];

  return (
    { isMobile } && (
      <footer style={mainFooter}>
        {/* TMC logo & follow */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            pt: 6.5,
          }}
        >
          <Image
            src={FooterLogo}
            alt="Footer Logo"
            width={footerLogoSize}
            height={footerLogoSize}
          />
          <Typography sx={typographyStyle}>Follow us on</Typography>
        </Box>

        {/* Logo rendered */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            pt: 3,
            pb: 4,
            borderBottom: "0.5px solid rgba(255, 255, 255, 0.5)",
          }}
        >
          <Image
            src={FacebookLogo}
            alt="Logo for Instagram Page"
            width={iconSize}
            height={iconSize}
          />
          <Image
            src={TwitterLogo}
            alt="Logo for Instagram Page"
            width={iconSize}
            height={iconSize}
          />
          <Image
            src={LinkedinLogo}
            alt="Logo for Instagram Page"
            width={iconSize}
            height={iconSize}
          />
          <Image
            src={InstagramLogo}
            alt="Logo for Instagram Page"
            width={iconSize}
            height={iconSize}
          />
          <Image
            src={YoutubeLogo}
            alt="Logo for Instagram Page"
            width={iconSize}
            height={iconSize}
          />
        </Box>

        {/* Grid loaded */}
        <Box
          sx={{
            p: [4, 7, 9, 6.5],
            borderBottom: "0.5px solid rgba(255, 255, 255, 0.5)",
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Stack spacing={3}>
                <Typography sx={headingStyle}>Categories</Typography>
                <Typography
                  sx={{ ...itemStyle, color: "#FC876D", fontSize: "16px" }}
                >
                  INTERNET
                </Typography>
                <Typography
                  sx={{ ...itemStyle, color: "#2CB680", fontSize: "16px" }}
                >
                  BUSINESS
                </Typography>
                <Typography
                  sx={{ ...itemStyle, color: "#907CFF", fontSize: "16px" }}
                >
                  CHAOS
                </Typography>
                <Typography
                  sx={{ ...itemStyle, color: "#ECB731", fontSize: "16px" }}
                >
                  NEWSLETTER
                </Typography>
                <Typography sx={itemStyle}>All Stories</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={3}>
                <Typography sx={headingStyle}>Subscription</Typography>
                <Typography sx={itemStyle}>Individual Plans</Typography>
                <Typography sx={itemStyle}>Coporate Plans</Typography>
                <Typography sx={itemStyle}>Student Plans</Typography>
                <Typography sx={itemStyle}>Gifting</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={3}>
                <Typography sx={headingStyle}>Company</Typography>
                <Typography sx={itemStyle}>About</Typography>
                <Typography sx={itemStyle}>Leadership</Typography>
                <Typography sx={itemStyle}>Investors</Typography>
                <Typography sx={itemStyle}>Team</Typography>
                <Typography sx={itemStyle}>
                  Editorial code of conduct
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={3}>
                <Typography sx={itemStyle}>
                  The Morning Context Blog - On the record
                </Typography>
                <Typography sx={itemStyle}>TMC Subscriber App</Typography>
                <Typography sx={itemStyle}>Collaborate</Typography>
                <Typography sx={itemStyle}>Contact Us</Typography>
                <Typography sx={itemStyle}>FAQs</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        {/* Address */}
        <Box
          sx={{
            pt: 3.25,
            pb: 3.25,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            borderBottom: "0.5px solid rgba(255, 255, 255, 0.5)",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Matteo",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "19px",
              letterSpacing: "0.03em",
              color: "#FFFFFF",
            }}
          >
            ©2020 Slowform Pte Limited
          </Typography>
          <Typography
            sx={{
              fontFamily: "Matteo",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "17px",
              letterSpacing: "0.03em",
              color: "rgba(255, 255, 255, 0.8)",
              pt: 1,
            }}
          >
            68 Circular Road, #02-01, 049422, Singapore
          </Typography>
        </Box>

        {/* terms & privacy policy */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pt: 3.25,
            pb: 4.25,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Matteo",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "19px",
              textDecorationLine: "underline",
              color: "#FFFFFF",
            }}
          >
            Terms of service
          </Typography>
          <Box
            sx={{
              width: "2px",
              height: "2px",
              background: "#FFFFFF",
              ml: 1,
              mr: 1,
            }}
          ></Box>
          <Typography
            sx={{
              fontFamily: "Matteo",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "19px",
              textDecorationLine: "underline",
              color: "#FFFFFF",
            }}
          >
            Privacy policy
          </Typography>
        </Box>
      </footer>
    )
  );
}
