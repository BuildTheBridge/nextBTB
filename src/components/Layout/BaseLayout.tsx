import { loadingState } from "@/atoms/loadingState";
import { Box, styled } from "@mui/material";
import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import Footer from "./Footer";
import Header from "./Header";
import Loading from "./Loading";

interface IProps {
  children: React.ReactNode;
}

interface IPath {
  path: string;
}

export default function BaseLayout({ children }: IProps) {
  // 로딩 관련 global atom
  const [loading, setLoading] = useRecoilState(loadingState);

  const [path, setPath] = useState("");

  const router = useRouter();

  useEffect(() => {
    setPath(router.pathname);
  }, [router.pathname]);

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
      <Header />
      <BoxSTchildren path={path}>{children}</BoxSTchildren>
      <Footer />
      <Loading loading={loading} />
    </Box>
  );
}

const BoxSTchildren = styled(Box)(({ path }: IPath) => {
  return {
    // paddingTop: path === "/" ? "" : "60px",
    width: "100%",
    minHeight: "100vh",
  };
});
