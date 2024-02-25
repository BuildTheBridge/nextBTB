import { AppBar, Container } from "@mui/material";
import Image from "next/image";
import React from "react";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        width: "100%",
        height: "60px",
        boxShadow: "none",
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      <Container
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          "&.MuiContainer-root": {
            maxWidth: "960px",
          },
        }}
        disableGutters
      >
        <Image
          src="/assets/logos/white_hr.png"
          alt="test"
          width={200}
          height={60}
        />
      </Container>
    </AppBar>
  );
}
