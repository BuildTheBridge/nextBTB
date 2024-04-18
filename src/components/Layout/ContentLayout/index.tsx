import useKorPath from "@/lib/clients/hooks/useKorPath";
import { Box, styled } from "@mui/material";
import { ReactNode } from "react";
import InputWithBtn from "./components/InputWithBtn";

interface IProps {
  children: ReactNode;
}

export default function ContentLayout(props: IProps) {
  const { children } = props;
  const korPath = useKorPath();

  return (
    <>
      <BoxSTkorPath>
        🏠 {">"} {korPath}
      </BoxSTkorPath>
      <BoxSTcontent>
        <InputWithBtn />
        {children}
      </BoxSTcontent>
    </>
  );
}

const BoxSTkorPath = styled(Box)(() => {
  return {
    width: "100%",
    marginTop: "40px",
    maxWidth: "760px",
    textAlign: "start",
  };
});

const BoxSTcontent = styled(Box)(() => {
  return {
    gap: "20px",
    width: "100%",
    display: "flex",
    maxWidth: "760px",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    margin: "0px auto auto auto",
  };
});
