import { Box, styled, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

interface IProps {
  checked: boolean;
  text?: string;
  isCheck: (value: boolean) => void;
}

export default function CommonCheckBox(props: IProps) {
  const { checked, isCheck, text } = props;
  return (
    <Wrapper
      value="rememberId"
      control={
        <CheckBoxBtnST
          checked={checked}
          onClick={() => isCheck(!checked)}
          checkedIcon={<CheckedIconST />}
          icon={<UnCheckedIconST />}
          sx={{}}
        />
      }
      label={text}
    />
  );
}

const Wrapper = styled(FormControlLabel)(() => {
  return {
    "& .MuiFormControlLabel-root": {
      margin: 0,
      padding: 0,
      lineHeight: 0,
      display: "flex",
      alignItems: "center",
      verticalAlign: "middle",
    },
    "& .MuiTypography-root": {
      padding: 0,
      display: "flex",
      fontSize: "13px",
      marginTop: "2px",
      textAlign: "center",
      verticalAlign: "middle",
    },
  };
});

const CheckBoxBtnST = styled(Radio)(() => {
  return {
    "&.MuiButtonBase-root": {
      margin: 0,
      padding: "3px",
      "&.MuiRadio-root": {
        "&.Mui-checked": {
          color: "#3196fe",
        },
      },
    },
  };
});

const CheckedIconST = styled(CheckBoxIcon)(() => {
  return {
    width: "20px",
    height: "20px",
    borderRadius: "12px",
  };
});

const UnCheckedIconST = styled(CheckBoxOutlineBlankIcon)(() => {
  return {
    width: "20px",
    height: "20px",
    borderRadius: "12px",
  };
});
