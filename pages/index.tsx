import NavBar from "@/components/nav/nav-bar";
import CustomHead from "@/components/custom-head";
import Footer from "@/components/footer";
import { BASE_TITLE } from "@/utils/seo";
import { Box } from "@mui/material";
import Context from "@/components/context";
import Journalism from "@/components/journalism";
import WhyChooseTMC from "@/components/why-tmc";
import StarterCollection from "@/components/starter-collection";

export default function Home() {
  return (
    <Box sx={{ position: "relative" }}>
      <CustomHead description={BASE_TITLE} title={BASE_TITLE} />
      <NavBar />
      <Context />
      <Journalism />
      <WhyChooseTMC />
      <StarterCollection />
      <Footer />
    </Box>
  );
}
