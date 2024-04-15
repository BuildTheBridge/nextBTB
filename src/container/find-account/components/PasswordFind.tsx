import CommonTextField from "@/components/Common/CommonTextField";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";

export default function PasswordFind() {
  const [showNumberInput, setShowNumberInput] = useState(false);
  return (
    <Wrapper>
      <CommonTextField
        id="outlined-basic"
        label="가입하신 아이디를 입력해주세요."
      />
      <Box sx={{ display: "flex", gap: "20px", width: "100%" }}>
        <CommonTextField
          id="outlined-basic"
          label="가입하신 이메일을 입력해주세요."
          sx={{ width: "100%" }}
        />
        <Button
          variant="contained"
          sx={{
            width: "100%",
            maxWidth: "140px",
          }}
          onClick={() => setShowNumberInput(true)}
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
