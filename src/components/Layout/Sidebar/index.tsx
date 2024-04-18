import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { KeyboardEvent } from "react";

import { MENUS } from "@/config";

interface IProps {
  open: boolean;
  onClick: (value: boolean) => void;
}

export default function Sidebar(props: IProps) {
  const { open, onClick } = props;
  const router = useRouter();

  const toggleDrawer = (event: KeyboardEvent | MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as KeyboardEvent).key === "Tab" ||
        (event as KeyboardEvent).key === "Shift")
    ) {
      return;
    }
  };

  const list = () => (
    <ListWrapper
      role="presentation"
      onClick={() => {
        if (onclick) onClick(false);
      }}
      onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
        toggleDrawer(e);
        onClick(false);
      }}
    >
      <ImageWrapper>
        <Image
          src={`/images/logos/blue-hr.png`}
          alt="whiteLogo"
          width={180}
          height={40}
          priority
          onClick={() => router.push("/")}
        />
      </ImageWrapper>
      <Divider />
      <ListST>
        {MENUS.map((menu, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButtonST
              onClick={() => {
                router.push(menu.path);
                onClick(false);
              }}
            >
              <Image
                src={menu.imgUrl}
                width={20}
                height={20}
                priority
                alt="menuIcon"
              />
              <ListItemTextST primary={menu.title} />
            </ListItemButtonST>
          </ListItem>
        ))}
      </ListST>
    </ListWrapper>
  );

  return (
    <Drawer
      anchor={"left"}
      open={open}
      onClose={(e: KeyboardEvent | MouseEvent) => {
        toggleDrawer(e);
        onClick(false);
      }}
      transitionDuration={{ enter: 1000, exit: 1000 }}
    >
      {list()}
    </Drawer>
  );
}

const ListWrapper = styled(Box)(() => {
  return {
    gap: "8px",
    width: 230,
    display: "flex",
    padding: "20px 16px",
    flexDirection: "column",
  };
});

const ImageWrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
});

const ListItemTextST = styled(ListItemText)(() => {
  return {
    "& .MuiTypography-root": {
      fontSize: "16px",
    },
  };
});

const ListItemButtonST = styled(ListItemButton)(() => {
  return {
    gap: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&.MuiListItemButton-root": {
      padding: "8px 0px 8px 0px ",
    },
  };
});

const ListST = styled(List)(() => {
  return {
    gap: "4px",
    display: "flex",
    flexDirection: "column",
  };
});
