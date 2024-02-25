import { TextField, styled } from "@mui/material";
import React from "react";

interface IProps {
  id?: string;
  label?: string;
  placeHolder?: string;
}

export default function BTextField(props: IProps) {
  const { label, id, placeHolder } = props;
  return (
    <TextFieldST
      variant="outlined"
      id={id}
      label={label}
      placeholder={placeHolder}
    />
  );
}

const TextFieldST = styled(TextField)(() => {
  return {
    width: "100%",
    "& .MuiOutlinedInput-root": {
      fontSize: "14px",
      lineHeight: "20px",
      borderRadius: "8px",
    },
    "& .MuiInputLabel-root": {
      fontSize: "14px",
    },
  };
});
