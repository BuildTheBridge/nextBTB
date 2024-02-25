import { loadingState } from "@/atoms/loadingState";
import { Box, styled } from "@mui/material";
import { Router } from "next/router";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

import ContentLayout from "./ContentLayout";
import Footer from "./Footer";
import HeaderTest from "./HeaderTest";
import Loading from "./Loading";
import { usePathname } from "next/navigation";

interface IProps {
  children: React.ReactNode;
}

interface IPath {
  path: string;
}

export default function BaseLayout({ children }: IProps) {
  // 로딩 관련 global atom
  const [loading, setLoading] = useRecoilState(loadingState);
  const path = usePathname();
  // 로딩상태 체크 useEffect
  useEffect(() => {
    const startLoading = () => {
      setLoading(true);
    };
    const endLoading = () => {
      setLoading(false);
    };

    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", endLoading);
    Router.events.on("routeChangeError", endLoading);

    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", endLoading);
      Router.events.off("routeChangeError", endLoading);
    };
  }, [setLoading]);

  return (
    <Box>
      {/* <Header /> */}
      <HeaderTest />
      <BoxSTchildren>
        {path === "/" ? children : <ContentLayout>{children}</ContentLayout>}
      </BoxSTchildren>
      <Footer />
      <Loading loading={loading} />
    </Box>
  );
}

const BoxSTchildren = styled(Box)(() => {
  return {
    gap: "80px",
    width: "100%",
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    padding: "60px 20px 0px 20px",
  };
});
