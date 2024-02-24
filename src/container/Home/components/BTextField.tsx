import { TextField, styled } from "@mui/material";
import React from "react";

interface IProps {
  id?: string;
  label?: string;
}

export default function BTextField(props: IProps) {
  const { label, id } = props;
  return <TextFieldST variant="outlined" label={label} id={id} />;
}

const TextFieldST = styled(TextField)(() => {
  return {
    width: "100%",
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      fontSize: "14px",
      lineHeight: "20px",
    },
    "& .MuiInputLabel-root": {
      fontSize: "14px",
    },
  };
});
