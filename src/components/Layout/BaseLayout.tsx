import { loadingState } from "@/atoms/loadingState";
import { Router } from "next/router";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Box, styled } from "@mui/material";

import Loading from "./Loading";

interface IProps {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: IProps) {
  // 로딩 관련 global atom
  const [loading, setLoading] = useRecoilState(loadingState);

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
      <Box>헤더</Box>
      <BoxSTchildren>{children}</BoxSTchildren>
      <Box>푸터</Box>

      <Loading loading={loading} />
    </Box>
  );
}

const BoxSTchildren = styled(Box)(() => {
  return {
    minHeight: "100vh",
  };
});
