import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { ReactElement } from "react";
import DesktopNavMenuButton from "./nav-menu-button";
import Image from "next/image";
import TMCLogo from "../../public/TMC_Icon.svg";
import SearchIcon from "../../public/Search_icon.svg";
import TMCButton from "../common/tmc-button";

export default function NavBar(): ReactElement {
  const searchIconSize = 20;
  return (
    <AppBar
      color="inherit"
      sx={{
        alignItems: "center",
        boxShadow: "0",
        padding: "10px 12px 10px 18px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexBasis: "60%",
          }}
        >
          <DesktopNavMenuButton />
          <Image src={TMCLogo} alt="The Morning Context" />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexBasis: "40%",
          }}
        >
          <Image
            src={SearchIcon}
            alt="Search Icon"
            width={searchIconSize}
            height={searchIconSize}
          />
          <TMCButton
            color="primary"
            variant="contained"
            width="70%"
            background="linear-gradient(90.97deg, #6C7AF7 0%, #A97DF1 99.9%)"
            position="relative"
            top="0"
          >
            SIGN UP
          </TMCButton>
        </Box>
      </Box>
    </AppBar>
  );
}
