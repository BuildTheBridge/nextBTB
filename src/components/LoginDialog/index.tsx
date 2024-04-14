import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Image from "next/image";

import WHITE_LOGO from "@/public/images/logos/white.png";
import { Box } from "@mui/material";
import { useState } from "react";
import CommonTextField from "../Common/CommonTextField";
import CommonCheckBox from "../Common/CommonCheckBox";
import { useRouter } from "next/router";

interface IProps {
  open: boolean;
  handleClose: () => void;
}
// MuiDialog-container MuiDialog-scrollPaper css-hz1bth-MuiDialog-container
export default function LoginDialog(props: IProps) {
  const { open, handleClose } = props;
  const router = useRouter();

  const [isCheck, setIsCheck] = useState(false);

  return (
    <DiaLogST onClose={handleClose} open={open}>
      {/* 타이틀 */}
      <Title>
        <Image src={WHITE_LOGO} alt="WHITE_LOGO" width={100} height={100} />
        <Typography variant="subtitle2" color="initial">
          로그인하고
          <br /> 파트너를
          <br /> 만나러 가요!
        </Typography>
      </Title>

      {/* close 버튼 */}
      <CloseBtnWrapper aria-label="close" onClick={handleClose}>
        <CloseIcon />
      </CloseBtnWrapper>

      {/* 내용 */}
      <Content>
        <CommonTextField id="outlined-basic" label="아이디" />
        <CommonTextField id="outlined-basic" label="비밀번호" />

        <TextWrapper>
          <CommonCheckBox
            checked={isCheck}
            isCheck={(value: boolean) => setIsCheck(value)}
            text="아이디 기억하기"
          />

          <Typography
            variant="caption1"
            color="initial"
            sx={{ cursor: "pointer" }}
            onClick={() => router.push("/find-account")}
          >
            아이디를 잊으셨나요?
          </Typography>
        </TextWrapper>
      </Content>

      {/* 하단 submit */}
      <Bottom>
        <ButtonST variant="contained" onClick={handleClose}>
          로그인
        </ButtonST>
      </Bottom>
    </DiaLogST>
  );
}

const DiaLogST = styled(Dialog)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  "& .MuiDialog-container": {
    width: "100%",
  },
  "& .MuiPaper-root": {
    gap: "24px",
    width: "100%",
    padding: "40px 24px",
    maxWidth: "420px",
    borderRadius: "12px",
  },
}));

const ButtonST = styled(Button)(() => {
  return {
    width: "100%",
    color: "#fff",
    boxShadow: "none",
    borderRadius: "12px",
    backgroundColor: "#93bbff",
    ":hover": {
      boxShadow: "none",
      backgroundColor: "#397ff9",
    },
  };
});

const Title = styled(Box)(() => {
  return {
    margin: 0,
    gap: "20px",
    padding: "0px 12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
});

const Content = styled(DialogContent)(() => {
  return {
    gap: "24px",
    display: "flex",
    padding: "12px 0px",
    flexDirection: "column",
  };
});

const Bottom = styled(DialogActions)(() => {
  return {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };
});

const CloseBtnWrapper = styled(IconButton)(() => {
  return {
    top: 8,
    right: 8,
    position: "absolute",
  };
});

const TextWrapper = styled(Box)(() => {
  return {
    gap: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
});
