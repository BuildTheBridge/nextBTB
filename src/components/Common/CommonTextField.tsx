import { Theme } from "@mui/material";
import { SxProps, TextField, styled } from "@mui/material";
import React from "react";

interface IProps {
  id?: string;
  label?: string;
  placeHolder?: string;
  sx?: SxProps<Theme>;
}

export default function CommonTextField(props: IProps) {
  const { label, id, placeHolder, sx } = props;
  return (
    <TextFieldST
      variant="outlined"
      id={id}
      label={label}
      placeholder={placeHolder}
      sx={{ ...sx }}
    />
  );
}

const TextFieldST = styled(TextField)(() => {
  return {
    width: "100%",
    "& .MuiOutlinedInput-root": {
      fontSize: "15px",
      borderRadius: "8px",
    },
    "& .MuiInputLabel-root": {
      fontSize: "14px",
    },
    "& .MuiOutlinedInput-input": {
      padding: "15px 8px",
    },
  };
});
