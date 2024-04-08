import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import { ReactTyped } from "react-typed";

const MainTyped = () => {
  return (
    <Wrapper>
      <Title>Build The Bridge</Title>
      <TypedCotent>
        <Typography color={"#fff"} fontWeight={800} variant="h4">
          to
        </Typography>
        <ReactTypedST
          strings={["Your Partners"]}
          typeSpeed={120}
          backSpeed={140}
          showCursor={true}
          loop
        />
      </TypedCotent>
      <Subtitle>학원 성장 비밀 레시피</Subtitle>
      <ButtonST variant="contained">문의하기</ButtonST>
    </Wrapper>
  );
};

export default MainTyped;

const Wrapper = styled(Box)(({ theme }) => {
  return {
    gap: "24px",
    width: "100%",
    display: "flex",
    margin: "0 auto",
    maxWidth: "720px",
    padding: "0px 24px",
    textAlign: "center",
    alignItems: "center",
    position: "absolute",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      gap: "16px",
    },
  };
});

const Title = styled(Box)(({ theme }) => {
  return {
    color: "#fff",
    fontWeight: 800,
    fontSize: "72px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "42px",
    },
    "@media (max-width:370px)": {
      fontSize: "34px",
    },
  };
});

const TypedCotent = styled(Box)(() => {
  return {
    gap: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
});

const ReactTypedST = styled(ReactTyped)(({ theme }) => {
  return {
    fontWeight: 800,
    fontSize: "42px",
    color: "#f4f135ed",
    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
    },
  };
});

const Subtitle = styled(Box)(({ theme }) => {
  return {
    fontWeight: 900,
    fontSize: "32px",
    color: "#b0adad",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
    "@media (max-width:370px)": {
      fontSize: "18px",
    },
  };
});

const ButtonST = styled(Button)(() => {
  return {
    width: "100%",
    maxWidth: "240px",
    borderRadius: "12px",
    backgroundColor: "#9fc3fe",
  };
});
