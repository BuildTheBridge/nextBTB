import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";

import { MAIN_POPOVER_MENUS } from "@/config";
import useSize from "@/lib/clients/hooks/useSize";
import BRIDGE from "@/public/images/icons/bridge.png";

import useScrollValue from "@/lib/clients/hooks/useScrollValue";
import HeaderPopover from "./components/HeaderPopover";

interface IProps {
  path: string;
  onClick: (value: boolean) => void;
  onMoveToElement: () => void;
  handleClickOpen: () => void;
}

export default function Header(props: IProps) {
  const { onClick, path, onMoveToElement, handleClickOpen } = props;

  const { scroll } = useScrollValue();

  const { width } = useSize();
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const onClickLoginBtn = (event: any) => {
    if (width < 600 && path === "/") {
      setAnchorEl(event?.currentTarget);
    } else if (path !== "/") {
      onClick(true);
    } else {
      handleClickOpen();
      console.log("걍로그인");
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const testRouter = (title: string) => {
    if (title === "Home") {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
      return;
    }
    if (title === "Contact") {
      onMoveToElement();
      return;
    }
  };

  return (
    <Wrapper scroll={scroll} path={path}>
      <Content>
        {/* 헤더 로고 img */}
        <Image
          src={
            path === "/" && scroll <= 0
              ? `/images/logos/white-hr.png`
              : `/images/logos/blue-hr.png`
          }
          alt="whiteLogo"
          width={180}
          height={40}
          priority
          onClick={() => router.push("/")}
        />

        {/* 헤더 메뉴 */}
        <Menus>
          {path === "/" && (
            <TextInMenu>
              {MAIN_POPOVER_MENUS.map((menu, index) => {
                return (
                  <Typography
                    variant="subtitle3_long"
                    color={scroll > 1 ? "#004bd4" : "#fff"}
                    key={index}
                    sx={{ fontWeight: "bold" }}
                    onClick={() => testRouter(menu.title)}
                  >
                    {menu.title}
                  </Typography>
                );
              })}
            </TextInMenu>
          )}
          <LoginBtn
            src={BRIDGE}
            aria-describedby={id}
            alt="loginbtn"
            width={42}
            height={42}
            onClick={onClickLoginBtn}
          />
        </Menus>
      </Content>

      <HeaderPopover
        open={open}
        id={id}
        anchorEl={anchorEl}
        path={path}
        onMoveToElement={onMoveToElement}
        onClose={handleClose}
      />
    </Wrapper>
  );
}

const Wrapper = styled(Box)<{ scroll: number; path: string }>(
  ({ scroll, path }) => {
    return {
      zIndex: 2,
      width: "100%",
      height: "60px",
      display: "flex",
      position: "fixed",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: scroll > 1 ? "#fff" : "transparent",
      transition: "background-color 0.3s ease-in-out",
    };
  }
);

const Content = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    maxWidth: "960px",
    alignItems: "center",
    padding: "10px 24px",
    justifyContent: "space-between",
  };
});

const Menus = styled(Box)(({ theme }) => {
  return {
    gap: "160px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
});

const LoginBtn = styled(Image)(() => {
  return {
    width: "42px",
    height: "42px",
    padding: "2px",
    cursor: "pointer",
    borderRadius: "100%",
    backgroundColor: "#fafafa",
  };
});

const TextInMenu = styled(Box)(({ theme }) => {
  return {
    gap: "24px",
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  };
});
