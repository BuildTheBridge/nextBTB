import { Box, Typography, styled } from "@mui/material";

import useResponsive from "@/hooks/useResponsive";

export default function Footer() {
  const isXs = useResponsive("down", "xs");
  return (
    <Wrapper>
      <BoxSTcontent>
        <Typography variant="subtitle4" color="#706f6f" fontWeight={800}>
          빌더브릿지
        </Typography>
        <Box>
          <Typography variant="body3_long" color="#a4a4a4" fontWeight={800}>
            사업자 등록번호 : 740-07-02600 {isXs ? <br /> : " |"} 대표 : 김세훈
          </Typography>
          <br />
          <Typography variant="body3_long" color="#a4a4a4" fontWeight={800}>
            주소 : 서울특별시 강남구 논현로 75길 15 501호 (역삼동, 수양빌딩)
          </Typography>
          <br />
          <Typography variant="body3_long" color="#a4a4a4" fontWeight={800}>
            전화 : 010-4639-9987 {isXs ? <br /> : " |"} 이메일 :
            ksh@buildthebr.com
          </Typography>
        </Box>
        <Typography variant="body3_long" color="#a4a4a4" fontWeight={800}>
          Copyright © BUILD THE BRIDGE. All Rights Reserved.
        </Typography>
      </BoxSTcontent>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    minHeight: "200px",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fafafa",
  };
});

const BoxSTcontent = styled(Box)(() => {
  return {
    gap: "12px",
    width: "100%",
    display: "flex",
    textAlign: "start",
    margin: "20px 20px",
    maxWidth: "fit-content",
    flexDirection: "column",
  };
});
