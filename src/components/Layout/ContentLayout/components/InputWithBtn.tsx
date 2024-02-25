import BTextField from "@/components/BTextField";
import { Box, Button } from "@mui/material";
import React from "react";

export default function InputWithBtn() {
  return (
    <Box sx={{ display: "flex", gap: "20px", width: "100%" }}>
      <BTextField placeHolder="검색어를 입력해주세요" />
      <Button variant="contained" sx={{ borderRadius: "8px" }}>
        검색
      </Button>
    </Box>
  );
}
