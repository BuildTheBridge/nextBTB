import { AppBar, Box, Container, styled, useTheme } from "@mui/material";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import ImgHeaderIcon from "@/public/images/app-icon/header-icon.svg";
import ImgHeaderTitle from "@/public/images/app-icon/header-title.svg";
import ImgCloseIcon from "@/public/images/icons/close.svg";
import ImgMenuIcon from "@/public/images/icons/menu.svg";
import { MENUS } from "@/config";
import useResponsive from "@/hooks/useResponsive";
export default function HeaderTest() {
  const router = useRouter();
  const pathName = usePathname();
  //   const user = useUser();
  const isTablet = useResponsive("down", "tablet");
  const theme = useTheme();
  //   const setGlobalDialog = useSetRecoilState(globalDialogState);
  const [showSideBar, setShowSideBar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [hoverMenu, setHoverMenu] = useState("");
  //   const { t } = useTranslation();
  useEffect(() => {
    if (showMenu === false) {
      setHoverMenu("");
    }
  }, [showMenu]);
  // 화면 크기 변경 시 메뉴 닫기
  useEffect(() => {
    setShowMenu(false);
    setShowSideBar(false);
  }, [isTablet]);
  // 로그아웃 처리
  const handleLogout = () => {
    // setGlobalDialog({
    //   show: true,
    //   title: t("로그아웃"),
    //   content: t("로그아웃 하시겠어요?"),
    //   confirmText: t("확인"),
    //   cancelText: t("취소"),
    //   onConfirm: () => {
    //     clearTokens();
    //     window.location.href = "/";
    //   },
    // });
  };
  const checkActive = (path?: string) => {
    if (path === undefined) return "false";
    // Hover 상태일 때  hoverMenu 상태를 가져와 비교하여 true 반환
    if (hoverMenu === path) return "true";
    return pathName?.startsWith(path).toString();
  };

  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(pathName);
  }, [pathName]);

  return (
    <>
      <AppBarST showshadow={"true"} scroll={scroll} path={path}>
        <Container
          disableGutters
          sx={{
            padding: "0px 24px",
            [theme.breakpoints.down("sm")]: {
              padding: "0px 20px",
            },
          }}
        >
          <BoxSTtoolbarWrapper>
            <Box
              sx={{
                display: "flex",
                cursor: "pointer",
                marginRight: "16px",
                alignItems: "center",
              }}
              onClick={() => {
                setShowMenu(false);
                router.push("/");
              }}
            >
              <Image
                src={
                  path === "/"
                    ? scroll
                      ? "/assets/logos/blue-hr.png"
                      : "/assets/logos/white-hr.png"
                    : "/assets/logos/blue-hr.png"
                }
                width={180}
                height={50}
                style={{ marginRight: "8px" }}
                alt="Icon"
              />
            </Box>
            {!isTablet && (
              <Box
                component={"nav"}
                sx={{
                  flexGrow: "1",
                  display: "flex",
                  marginLeft: "24px",
                }}
              >
                {MENUS.map((menu, index) => {
                  return (
                    <Box
                      key={"header-menu-" + index}
                      sx={{
                        width: "80px",
                        fontWeight: 800,
                        fontSize: "16px",
                        cursor: "pointer",
                        padding: "0px 16px",
                        textAlign: "center",
                        fontFamily: "NanumSquareRound",
                        color:
                          path === "/"
                            ? scroll
                              ? "#616161"
                              : "#fafafa"
                            : "#616161",
                        ":hover": {
                          color: theme.palette.primary.main,
                        },
                      }}
                      onClick={() => {
                        if (menu?.url) {
                          router.push(menu.url);
                          setShowMenu(false);
                          return;
                        }
                        setShowMenu(!showMenu);
                      }}
                    >
                      {menu.title}
                    </Box>
                  );
                })}
              </Box>
            )}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {/* profile render */}
              {!isTablet ? (
                // <SignIn
                //   mode="header"
                //   onClick={(action:any, data:any) => {
                //     setShowMenu(false);
                //     if (action === "router") {
                //       router.push(data);
                //     } else if (action === "logout") {
                //       handleLogout();
                //     } else if (action === "signin") {
                //       router.push("/signin");
                //     }
                //   }}
                // />
                <>sign in</>
              ) : (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      cursor: "pointer",
                      marginLeft: "16px",
                    }}
                    onClick={() => {
                      setShowSideBar(!showSideBar);
                    }}
                  >
                    {showSideBar ? (
                      <Image
                        src={"/assets/logos/blue.png"}
                        alt="close"
                        width={32}
                        height={32}
                      />
                    ) : (
                      <Image
                        src={"/assets/logos/blue.png"}
                        alt="menu"
                        width={32}
                        height={32}
                      />
                    )}
                  </Box>
                  {/* <Sidebar
                    show={showSideBar}
                    onClose={() => {
                      setShowSideBar(false);
                    }}
                    onSignOut={() => {
                      handleLogout();
                    }}
                  /> */}
                </>
              )}
            </Box>
          </BoxSTtoolbarWrapper>
        </Container>
      </AppBarST>
      {showMenu && (
        <Box
          sx={{
            left: 0,
            top: 60,
            right: 0,
            //Z-INDEX
            zIndex: 2,
            position: "fixed",
            overflow: "hidden",
            background: "transparent",
            height: "calc(100% - 60px)",
          }}
          onClick={() => {
            setShowMenu(false);
          }}
        >
          <Box
            sx={{
              left: 0,
              right: 0,
              //Z-INDEX
              zIndex: 3,
              height: "162px",
              overflow: "hidden",
              position: "absolute",
              backgroundColor: "white",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.12)",
            }}
          >
            <Container disableGutters>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  paddingLeft: "161px",
                }}
              >
                {MENUS.map((menu, index) => {
                  return (
                    <Box
                      key={"header-submenu-" + index}
                      sx={{
                        gap: "20px",
                        width: "120px",
                        display: "flex",
                        paddingTop: "20px",
                        alignItems: "center",
                        flexDirection: "column",
                        borderTop:
                          checkActive(menu?.path) === "true"
                            ? `2px solid blue`
                            : "2px solid transparent",
                        ":hover": {
                          borderTop: `2px solid blue`,
                        },
                      }}
                      onMouseEnter={() => {
                        setHoverMenu(menu.path);
                      }}
                      onClick={() => {
                        if (menu?.url) {
                          router.push(menu.url);
                          setShowMenu(false);
                          return;
                        }
                        setShowMenu(!showMenu);
                      }}
                    >
                      {/* {menu.children?.map((child, index) => {
                        return (
                          <Box
                            key={"header-submenu-child-" + index}
                            sx={{
                              fontSize: 16,
                              fontWeight: 400,
                              cursor: "pointer",
                              color:
                                checkActive(child?.url) === "true"
                                  ? theme.palette.primary.main
                                  : "#61616",
                              ":hover": {
                                color: theme.palette.primary.main,
                              },
                            }}
                            onClick={() => {
                              router.push(child.url);
                            }}
                          >
                            {child.title}
                          </Box>
                        );
                      })} */}
                    </Box>
                  );
                })}
              </Box>
            </Container>
          </Box>
        </Box>
      )}
    </>
  );
}
const AppBarST = styled(AppBar)(
  ({
    showshadow,
    scroll,
    path,
  }: {
    showshadow: string;
    scroll: boolean;
    path: string;
  }) => {
    const boolShow = showshadow === "true" ? true : false;
    return {
      color: "black",
      height: "60px",
      backgroundColor: scroll
        ? "#fafafa"
        : path === "/"
        ? "transparent"
        : "#fafafa",
      transition: "backgroundColor 0.5s ease-in-out",
      boxShadow: boolShow
        ? "none"
        : "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);",
      // backgroundColor: "rgba(255,255,255,0.5)",
      // backdropFilter: "blur(5px)",
    };
  }
);
const BoxSTtoolbarWrapper = styled(Box)(() => {
  return {
    width: "100%",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
});
