import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { useMediaQuery } from "@material-ui/core";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      xsSmaller: 320,
      verySmall: 260,
      smBigger: 454,
      somewhatSmall: 410,
      smSmaller: 380,
      mdSmaller: 758,
    },
  },
  palette: {
    black: "#000",
    white: "#fff",
    heavyBlue: "#111827",
    backgroundPage: "#F9FAFB",
    coolNav: "#EBF2F2",
    primary: {
      main: "#059669",
    },
    secondary: {
      main: "#047857",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
      primary: "#111827",
      secondary: "#FFFFFF",
    },
    text: {
      white: "#FFFFFF",
      primary: "#000000",
      lighterGray: "#9ca3af",
      secondary: "#6b7280",
      green: "#047857",
      coolGreen: "#D1FAE5",
      gray: "#6b7280",
    },
  },
  typography: {
    fontFamily: [
      "DM Sans",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

theme.typography.h3 = {
  fontSize: 48,
  lineHeight: "60px",
  fontWeight: 700,
  fontFamily: "DM Sans, sans-serif",
  [theme.breakpoints.down("sm")]: {
    fontSize: 36,
    lineHeight: "50px",
  },
};

theme.typography.h2 = {
  fontSize: 55,
  lineHeight: "60px",
  fontWeight: 600,
  fontFamily: "DM Sans, sans-serif",
  [theme.breakpoints.down("sm")]: {
    fontSize: 45,
    lineHeight: "50px",
  },
};

theme.typography.h6 = {
  fontSize: 24,
  lineHeight: "36px",
  fontWeight: 700,
  fontFamily: "DM Sans, sans-serif",
};
theme.typography.body2 = {
  fontSize: 16,
  lineHeight: "24px",
  fontWeight: 400,
  fontFamily: "DM Sans, sans-serif",
};

export default theme;
