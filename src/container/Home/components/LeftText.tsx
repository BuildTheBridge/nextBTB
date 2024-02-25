import { Box, Typography, styled } from "@mui/material";
import React from "react";

export default function LeftText() {
  return (
    <BoxSTleftText>
      <Box>
        <TypographySThead variant="h4">
          지금 당장
          <br /> 로켓에 탑승하세요!
        </TypographySThead>
      </Box>
      <Box sx={{ display: "flex", gap: "5px", flexDirection: "column" }}>
        <Typography variant="body3" color="#676767" sx={{ width: "100%" }}>
          문의 내용을 확인하는 즉시 연락드리겠습니다.
        </Typography>
        <br />
        <Typography variant="caption1" color="#a4a4a4" sx={{ width: "100%" }}>
          입력하신 개인정보는
          <br /> 상담 목적으로 이용하는 즉시 폐기됩니다.
        </Typography>
      </Box>
    </BoxSTleftText>
  );
}

const TypographySThead = styled(Typography)(() => {
  return {
    width: "100%",
    fontFamily: "SCDream6",
  };
});

const BoxSTleftText = styled(Box)(({ theme }) => {
  return {
    gap: "20px",
    width: "100%",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "40px",
    },
  };
});
