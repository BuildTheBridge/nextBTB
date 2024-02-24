import {
  Box,
  Button,
  TextField,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import BTextField from "./components/BTextField";

export default function HomeContainer() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        // width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ width: "100%", minHeight: "100vh" }}>
        <Image src="/assets/backGround/main-bg.png" alt="main-bg" fill />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          maxWidth: "720px",
          justifyContent: "center",
          minHeight: "450px",

          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            minHeight: "600px",
            margin: "40px 0px 20px 0px",
          },
        }}
      >
        <Box
          sx={{
            gap: "20px",
            width: "100%",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            padding: "0px 20px",
            [theme.breakpoints.down("sm")]: {
              marginBottom: "40px",
              textAlign: "center",
            },
          }}
        >
          <Typography
            variant="h1"
            color="initial"
            fontFamily="SCDream6"
            sx={{ width: "100%" }}
          >
            Contact Us
          </Typography>
          <Box
            sx={{
              gap: "12px",
              width: "100%",
              display: "flex",
            }}
          >
            {/* .css-1uw1kny-MuiInputBase-root-MuiOutlinedInput-root */}
            <BTextField id="outlined-basic" label="상호명" />
            <BTextField id="outlined-basic" label="이름" />
          </Box>
          <Box sx={{ width: "100%" }}>
            <BTextField id="outlined-basic" label="주소" />
          </Box>
          <Box sx={{ width: "100%" }}>
            <BTextField id="outlined-basic" label="문의사항을 입력해 주세요" />
          </Box>
          <Box sx={{ width: "100%", display: "flex", gap: "12px" }}>
            <BTextField id="outlined-basic" label="연락처를 기입해주세요" />
            <ButtonST variant="contained">제출</ButtonST>
          </Box>
        </Box>
        <Box
          sx={{
            gap: "20px",
            textAlign: "center",
            width: "100%",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            [theme.breakpoints.down("sm")]: {
              marginBottom: "40px",
            },
          }}
        >
          <Box>
            <Typography
              variant="h4"
              color="initial"
              fontFamily="SCDream6"
              sx={{ width: "100%" }}
            >
              지금 당장
              <br /> 로켓에 탑승하세요!
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "5px", flexDirection: "column" }}>
            <Typography variant="body3" color="#676767" sx={{ width: "100%" }}>
              문의 내용을 확인하는 즉시 연락드리겠습니다.
            </Typography>
            <br />
            <Typography
              variant="caption1"
              color="#a4a4a4"
              sx={{ width: "100%" }}
            >
              입력하신 개인정보는
              <br /> 상담 목적으로 이용하는 즉시 폐기됩니다.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const ButtonST = styled(Button)(() => {
  return {
    width: "100%",
    maxWidth: "140px",
    maxHeight: "60px",
    borderRadius: "8px",
    fontWeight: 800,
    fontsize: "26px",
  };
});
