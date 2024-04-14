import CommonTextField from "@/components/Common/CommonTextField";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

export default function PasswordFind() {
  return (
    <Wrapper>
      <CommonTextField
        id="outlined-basic"
        label="가입하신 아이디를 입력해주세요."
      />
      <CommonTextField
        id="outlined-basic"
        label="가입하신 이메일을 입력해주세요."
      />
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
