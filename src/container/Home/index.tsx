import { Box, styled } from "@mui/material";
import Image from "next/image";

import ContactUs from "./components/ContactUs";
import LeftText from "./components/LeftText";

export default function HomeContainer() {
  return (
    <Wrapper>
      {/* IMG */}
      <Box sx={{ width: "100%", minHeight: "100vh" }}>
        <Image src="/assets/backGround/main-bg.png" alt="main-bg" fill />
      </Box>

      <BoxSTcontent>
        {/* Contact Us */}
        <ContactUs />
        {/* static text */}
        <LeftText />
      </BoxSTcontent>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };
});

const BoxSTcontent = styled(Box)(({ theme }) => {
  return {
    width: "100%",
    display: "flex",
    maxWidth: "720px",
    minHeight: "450px",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      minHeight: "600px",
      flexDirection: "column",
      margin: "40px 0px 20px 0px",
    },
  };
});
