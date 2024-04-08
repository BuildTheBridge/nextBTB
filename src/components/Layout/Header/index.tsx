import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";
import { MouseEvent, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

import useScroll from "@/lib/clients/hooks/useScroll";
import useSize from "@/lib/clients/hooks/useSize";
import BRIDGE from "@/public/images/icons/bridge.png";
import { MAIN_POPOVER_MENUS } from "@/config";

import HeaderPopover from "./components/HeaderPopover";

interface IProps {
  path: string;
  onClick: (value: boolean) => void;
}

export default function Header(props: IProps) {
  const { onClick, path } = props;
  const { scroll } = useScroll();
  const { width } = useSize();
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const onClickLoginBtn = (event: MouseEvent<HTMLButtonElement>) => {
    if (width < 600 && path === "/") {
      setAnchorEl(event.currentTarget);
    } else if (path !== "/") {
      onClick(true);
    } else {
      console.log("걍로그인");
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const testRouter = () => {
    router.push("/academy");
  };

  return (
    <Wrapper scroll={scroll} path={path}>
      <Content>
        {/* 헤더 로고 img */}
        <Image
          src={
            path === "/"
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
                    color="#fff"
                    key={index}
                    sx={{ fontWeight: "bold" }}
                    onClick={testRouter}
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
            onClick={(e: any) => onClickLoginBtn(e)}
          />
        </Menus>
      </Content>

      <HeaderPopover
        open={open}
        id={id}
        anchorEl={anchorEl}
        path={path}
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
      backgroundColor: path === "/" ? "transparent" : "#fafafa",
      backdropFilter: scroll > 0 ? "blur(30px)" : "",
    };
  }
);

const Content = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    maxWidth: "960px",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 24px",
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
