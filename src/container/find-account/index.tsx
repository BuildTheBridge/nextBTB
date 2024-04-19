import { Box, Tab, Tabs, styled } from "@mui/material";
import React, { useState } from "react";
import IdFind from "./components/IdFind";
import PasswordFind from "./components/PasswordFind";
import { useMutation } from "@tanstack/react-query";
import MailApiClient from "@/clients/MailApiClient";

export default function FindAccountContainer() {
  const [tab, setTab] = useState("id");

  const gogo = useMutation({
    mutationKey: ["members"],
    mutationFn: async () => {
      const res = await MailApiClient.getInstance().sendMemberMail({
        MB_EML_ADDR: "frontendtt@gmail.com",
      });
      return res;
    },
  });
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
          }}
        >
          <Tab
            label="계정 찾기"
            value="id"
            onClick={() => gogo.mutate()}
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
    backgroundColor: "#fafafa",
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
    padding: "40px 24px",
    position: "relative",
    borderRadius: "24px",
    boxShadow: "0px 0px 10px #dbd8d8",
  };
});
