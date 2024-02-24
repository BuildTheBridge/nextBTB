import { createTheme } from "@mui/material";
import customTypography from "./typography";
import customPalette from "./typography";

const theme = createTheme({
  palette: {
    mode: "light",
    ...customPalette,
  },
  breakpoints: {
    values: {
      xs: 360,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 2560,
      mobile: 375,
      tablet: 768,
      desktop: 1024,
      fourK: 2560,
    },
  },
  typography: {
    ...customTypography,
  },
});

export default theme;
