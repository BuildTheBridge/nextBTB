import { Box, styled, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import Image from "next/image";

import useScroll from "@/lib/clients/hooks/useScroll";

import BRIDGE from "@/public/images/icons/bridge.png";
import HAMBERGER from "@/public/images/icons/menu.png";

const MenuList = [{ text: "Home" }, { text: "Contact" }];

interface IProps {
  onClick: (value: boolean) => void;
}

export default function Header(props: IProps) {
  const { onClick } = props;
  const { scroll } = useScroll();

  const path = usePathname();

  return (
    <Wrapper scroll={scroll}>
      <Content>
        {/* 헤더 로고 img */}
        <Image
          src="/images/logos/white-hr.png"
          alt="whiteLogo"
          width={180}
          height={40}
        />

        {/* 헤더 메뉴 */}
        <Menus>
          <TextInMenu>
            {MenuList.map((item, index) => {
              return (
                <Typography
                  variant="subtitle3_long"
                  color="#fff"
                  key={index}
                  sx={{ fontWeight: "bold" }}
                >
                  {item.text}
                </Typography>
              );
            })}
          </TextInMenu>
          <LoginBtn src={BRIDGE} alt="loginbtn" width={42} height={42} />
        </Menus>

        {/* Home 화면이 아니고 헤더 sm 이하에서 햄버거 icon */}
        {path !== "/" && (
          <HambergerIcon
            src={HAMBERGER}
            alt="HAMBERGER"
            width={24}
            height={20}
            onClick={() => {
              if (onClick) onClick(true);
            }}
          />
        )}
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled(Box)<{ scroll: number }>(({ scroll }) => {
  return {
    zIndex: 2,
    width: "100%",
    height: "60px",
    display: "flex",
    position: "fixed",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    backdropFilter: scroll > 0 ? "blur(30px)" : "",
  };
});

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

const HambergerIcon = styled(Image)(({ theme }) => {
  return {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  };
});

const LoginBtn = styled(Image)(() => {
  return {
    width: "42px",
    height: "42px",
    padding: "2px",
    borderRadius: "100%",
    backgroundColor: "#fafafa",
  };
});

const TextInMenu = styled(Box)(({ theme }) => {
  return {
    gap: "24px",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  };
});
