import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";

import BTextField from "@/components/BTextField";

export default function ContactUs() {
  return (
    <BoxSTinput>
      <TypographySThead variant="h1">Contact Us</TypographySThead>
      <BoxST>
        <BTextField id="outlined-basic" label="상호명" />
        <BTextField id="outlined-basic" label="이름" />
      </BoxST>
      <Box sx={{ width: "100%" }}>
        <BTextField id="outlined-basic" label="주소" />
      </Box>
      <Box sx={{ width: "100%" }}>
        <BTextField id="outlined-basic" label="문의사항을 입력해 주세요" />
      </Box>
      <BoxST>
        <BTextField id="outlined-basic" label="연락처를 기입해주세요" />
        <ButtonST variant="contained">제출</ButtonST>
      </BoxST>
    </BoxSTinput>
  );
}

const BoxSTinput = styled(Box)(({ theme }) => {
  return {
    gap: "20px",
    width: "100%",
    display: "flex",
    padding: "0px 20px",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginBottom: "40px",
    },
  };
});

const TypographySThead = styled(Typography)(() => {
  return {
    width: "100%",
    fontFamily: "SCDream6",
  };
});

const BoxST = styled(Box)(() => {
  return {
    gap: "10px",
    width: "100%",
    display: "flex",
  };
});

const ButtonST = styled(Button)(() => {
  return {
    width: "100%",
    fontWeight: 800,
    fontsize: "26px",
    maxWidth: "140px",
    maxHeight: "60px",
    borderRadius: "8px",
  };
});
