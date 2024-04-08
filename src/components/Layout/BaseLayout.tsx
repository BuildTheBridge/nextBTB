import { Box, styled } from "@mui/material";
import React, { useState } from "react";

import { usePathname } from "next/navigation";
import ContentLayout from "./ContentLayout";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface IProps {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: IProps) {
  // 로딩 관련 global atom
  // const [loading, setLoading] = useRecoilState(loadingState);
  const path = usePathname();
  // 로딩상태 체크 useEffect
  // useEffect(() => {
  //   const startLoading = () => {
  //     setLoading(true);
  //   };
  //   const endLoading = () => {
  //     setLoading(false);
  //   };

  //   Router.events.on("routeChangeStart", startLoading);
  //   Router.events.on("routeChangeComplete", endLoading);
  //   Router.events.on("routeChangeError", endLoading);

  //   return () => {
  //     Router.events.off("routeChangeStart", startLoading);
  //     Router.events.off("routeChangeComplete", endLoading);
  //     Router.events.off("routeChangeError", endLoading);
  //   };
  // }, [setLoading]);

  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleDrawer = (value: boolean) => {
    setOpenSidebar(value);
  };

  return (
    <Box>
      <Header onClick={(value: boolean) => toggleDrawer(value)} path={path} />
      <BoxSTchildren path={path}>
        {path === "/" ? children : <ContentLayout>{children}</ContentLayout>}
      </BoxSTchildren>
      <Footer />
      <Sidebar
        onClick={(value: boolean) => toggleDrawer(value)}
        open={openSidebar}
      />
    </Box>
  );
}

const BoxSTchildren = styled(Box)<{ path: string }>(({ path }) => {
  return {
    gap: "80px",
    width: "100%",
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    padding: path === "/" ? "" : "60px 20px 0px 20px",
  };
});
