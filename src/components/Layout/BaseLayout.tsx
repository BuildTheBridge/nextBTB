import { Box, styled } from "@mui/material";
import React, { ReactElement, useState } from "react";

import { usePathname } from "next/navigation";
import ContentLayout from "./ContentLayout";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import useMoveScroll from "@/lib/clients/hooks/useMoveScroll";
import LoginDialog from "../LoginDialog";

interface IProps {
  children: React.ReactNode;
}

export default function BaseLayout(props: IProps) {
  const { children } = props;

  const path = usePathname();

  const { element, onMoveToElement } = useMoveScroll();

  const [openSidebar, setOpenSidebar] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (value: boolean) => {
    setOpenSidebar(value);
  };

  return (
    <Box>
      <Header
        onClick={(value: boolean) => toggleDrawer(value)}
        path={path}
        onMoveToElement={onMoveToElement}
        handleClickOpen={() => setOpen(true)}
      />
      <BoxSTchildren path={path}>
        {path === "/" ? (
          React.Children.map(children, (child) =>
            React.cloneElement(child as ReactElement, {
              element,
              onMoveToElement,
            })
          )
        ) : (
          <ContentLayout>{children}</ContentLayout>
        )}
      </BoxSTchildren>
      <Footer />
      <Sidebar
        onClick={(value: boolean) => toggleDrawer(value)}
        open={openSidebar}
      />

      <LoginDialog open={open} handleClose={() => setOpen(false)} />
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
