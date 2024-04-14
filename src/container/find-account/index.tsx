import { Box, Tab, Tabs, styled } from "@mui/material";
import React, { useState } from "react";
import IdFind from "./components/idFind";
import PasswordFind from "./components/PasswordFind";

export default function FindAccountContainer() {
  const [tab, setTab] = useState("id");
  return (
    <Wrapper>
      <Content>
        <Tabs
          value={tab}
          onChange={(_, value) => setTab(value)}
          centered
          sx={{
            width: "100%",
            maxWidth: "320px",
            position: "absolute",
            top: 0,
            left: "33.3%",
            marginLeft: "-50px",
          }}
        >
          <Tab
            label="계정 찾기"
            value="id"
            sx={{ width: "50%", maxWidth: "200px", wordBreak: "keep-all" }}
          />
          <Tab
            label="비밀번호 찾기"
            value="pw"
            sx={{ width: "50%", maxWidth: "200px", wordBreak: "keep-all" }}
          />
        </Tabs>

        {tab === "id" ? <IdFind /> : <PasswordFind />}
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    minHeight: "100vh",
  };
});

const Content = styled(Box)(() => {
  return {
    gap: "40px",
    width: "100%",
    margin: "auto",
    display: "flex",
    minHeight: "500px",
    maxWidth: "720px",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
  };
});
