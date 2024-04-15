import CommonTextField from "@/components/Common/CommonTextField";
import { Box, Button, styled } from "@mui/material";
import { useState } from "react";

export default function IdFind() {
  const [showNumberInput, setShowNumberInput] = useState(false);

  return (
    <Wrapper>
      <Box sx={{ display: "flex", gap: "20px", width: "100%" }}>
        <CommonTextField
          id="outlined-basic"
          label="가입하신 이메일을 입력해주세요."
          sx={{ width: "100%" }}
        />
        <Button
          variant="contained"
          onClick={() => setShowNumberInput(true)}
          sx={{
            width: "100%",
            maxWidth: "140px",
          }}
        >
          인증번호 전송
        </Button>
      </Box>
      {showNumberInput && (
        <Box sx={{ display: "flex", gap: "20px", width: "100%" }}>
          <CommonTextField
            id="outlined-basic"
            label="전송된 인증번호를 입력해주세요."
            sx={{ width: "100%" }}
          />
          <Button
            variant="contained"
            sx={{
              width: "100%",
              maxWidth: "140px",
            }}
          >
            인증하기
          </Button>
        </Box>
      )}
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    gap: "32px",
    width: "100%",
    display: "flex",
    maxWidth: "540px",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };
});
