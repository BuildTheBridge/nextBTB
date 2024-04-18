import { Box, styled } from "@mui/material";

import ContactUs from "./components/ContactUs";
import LeftText from "./components/LeftText";
import MainTyped from "./components/MainTyped";
import { Ref } from "react";
import MemberApiClient from "@/server/clients/MemberApiClient";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  element: Ref<undefined> | null;
  onMoveToElement: () => void;
}

export default function HomeContainer(props: IProps) {
  const { element, onMoveToElement } = props;
  const { data: memberData } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const res = await MemberApiClient.getInstance().readMember();
      return res;
    },
  });
  console.log("testcommit");

  return (
    <Wrapper>
      {/* IMG */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          minHeight: "100vh",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          background: 'url("/images/backGround/main-bg.png") no-repeat',
        }}
      >
        <MainTyped onMoveToElement={onMoveToElement} />
        <ImgBackground src="/images/backGround/main-bg.png" alt="main-bg" />
      </Box>

      <BoxSTcontent ref={element}>
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
    width: "100%",
    display: "flex",
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
    scrollMarginTop: "60px",
    [theme.breakpoints.down("sm")]: {
      minHeight: "600px",
      flexDirection: "column",
      margin: "40px 0px 20px 0px",
    },
  };
});

const ImgBackground = styled("img")(() => {
  return {
    width: "100%",
    minHeight: "100vh",
    objectFit: "cover",
  };
});
