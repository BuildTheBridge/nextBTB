import CommonTextField from "@/components/Common/CommonTextField";
import { Box, Button, styled } from "@mui/material";
import { useState } from "react";

export default function IdFind() {
  const [showNumberInput, setShowNumberInput] = useState(false);

  return (
    <Wrapper>
      <Box>
        <CommonTextField
          id="outlined-basic"
          label="가입하신 이메일을 입력해주세요."
        />
        <Button variant="contained" onClick={() => setShowNumberInput(true)}>
          인증번호 전송
        </Button>
      </Box>
      {showNumberInput && (
        <Box>
          <CommonTextField
            id="outlined-basic"
            label="전송된 인증번호를 입력해주세요."
          />
          <Button variant="contained">인증하기</Button>
        </Box>
      )}
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    gap: "24px",
    width: "100%",
    display: "flex",
    maxWidth: "640px",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };
});
