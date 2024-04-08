import { Box, Popover, styled } from "@mui/material";
import React from "react";

import { MAIN_POPOVER_MENUS } from "@/config";
import { POPOVER_MENUS } from "@/config";

interface IProps {
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  id: string | undefined;
  onClose: () => void;
  path: string;
  onMoveToElement: () => void;
}

export default function HeaderPopover(props: IProps) {
  const { open, anchorEl, id, onClose, path, onMoveToElement } = props;

  const onClickMenu = (title: string) => {
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

  const renderMenus = (path: string) => {
    if (path === "/") {
      return MAIN_POPOVER_MENUS.map((menu, idx) => {
        return (
          <Menus key={idx} onClick={() => onClickMenu(menu.title)}>
            {menu.title}
          </Menus>
        );
      });
    }
    return POPOVER_MENUS.map((menu, idx) => {
      return <Menus key={idx}>{menu.title}</Menus>;
    });
  };

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "8px",
          fontSize: "12px",
          padding: "4px 16px",
        },
      }}
    >
      {renderMenus(path)}
    </Popover>
  );
}

const Menus = styled(Box)(() => {
  return {
    display: "flex",
    cursor: "pointer",
    padding: "10px 0px",
  };
});
