import CommonTextField from "@/components/Common/CommonTextField";
import SendMailApiClient from "@/server/clients/MailApiClient";
import { Box, Button, Typography, styled } from "@mui/material";
import { useMutation } from "@tanstack/react-query";

export default function ContactUs() {
  const gogo = useMutation({
    mutationKey: ["contact-us"],
    mutationFn: async () => {
      const res = await SendMailApiClient.getInstance().sendContactUsMail({
        emailAddr: "frontendtt@gmail.com",
        name: "park",
        addr: "경기도",
        businessName: "ㅎㅎ",
        content: "ㅎㅇㅎㅇ",
        phoneNum: "1234",
      });

      return res;
    },
  });

  return (
    <BoxSTinput>
      <TypographySThead variant="h1">Contact Us</TypographySThead>
      <BoxST>
        <CommonTextField id="outlined-basic" label="상호명" />
        <CommonTextField id="outlined-basic" label="이름" />
      </BoxST>
      <Box sx={{ width: "100%" }}>
        <CommonTextField id="outlined-basic" label="주소" />
      </Box>
      <Box sx={{ width: "100%" }}>
        <CommonTextField id="outlined-basic" label="문의사항을 입력해 주세요" />
      </Box>
      <BoxST>
        <CommonTextField id="outlined-basic" label="연락처를 기입해주세요" />
        <ButtonST variant="contained" onClick={() => gogo.mutate()}>
          제출
        </ButtonST>
      </BoxST>
    </BoxSTinput>
  );
}

const BoxSTinput = styled(Box)(({ theme }) => {
  return {
    gap: "20px",
    width: "100%",
    display: "flex",
    padding: "0px 24px",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginBottom: "40px",
    },
  };
});

const TypographySThead = styled(Typography)(() => {
  return {
    width: "100%",
    fontFamily: "SCDream6",
  };
});

const BoxST = styled(Box)(() => {
  return {
    gap: "10px",
    width: "100%",
    display: "flex",
  };
});

const ButtonST = styled(Button)(() => {
  return {
    width: "100%",
    fontWeight: 800,
    fontsize: "26px",
    maxWidth: "140px",
    maxHeight: "60px",
    borderRadius: "8px",
  };
});
