import { createTheme } from "@mui/material/styles";

// Theme configuration
// export const primaryColor-old = "#764AF1";
export const primaryColor = "#00617c";
export const secondaryColor = "#27343C";
export const PAGE_PADDING = 7;
export const PAGE_PADDING_SM = 3.5;
export const PAGE_PADDING_XS = 2;
export const PAGE_RESPONSIVE = {
  md: PAGE_PADDING,
  sm: PAGE_PADDING_SM,
  xs: PAGE_PADDING_XS,
};

export const PAGE_PADDING2 = 4;
export const TRANSITION = "all 0.3s";
export const blackColor = "#3b3b3b";
export const whiteColor = "#d8d8d8";
export const Theme = createTheme({});
const commonStyles = {
  direction: "rtl",
  spacing: 8,
  // shape: {
  //   borderRadius: 25,
  // },
  typography: {
    fontFamily: "IRANSansXV, sans-serif",
    small: {
      fontSize: 10,
      fontFamily: "IRANSansXV, sans-serif",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: "auto",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: "0",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "inherit",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },

    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: 5,

          ":last-of-type": {
            borderRadius: 10,
          },
          ":first-of-type": {
            borderRadius: 10,
          },
          ":before": {
            backgroundColor: "unset",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 25,
        },
      },
    },
  },
};

export const lightTheme = createTheme({
  ...commonStyles,
  ...(commonStyles.components.MuiOutlinedInput = {
    styleOverrides: {
      root: {
        backgroundColor: "#fff",
      },
    },
  }),
  palette: {
    mode: "light",

    primary: {
      main: primaryColor,
      dark: "#005269",
      contrastText: whiteColor,
      light: "#E5EFF2",
      300: "#186F88",
      200: "#E9EFF2",
    },
    secondary: {
      main: secondaryColor,
      contrastText: whiteColor,
      light: "#E5EAFF",
      dark: "#232C32",
    },
    tertiary: {
      main: "#fff",
      contrastText: blackColor,
    },
    background: {
      default: "#F5F7F9",
      paper: "#fff",
    },
    text: {
      primary: blackColor,
      secondary: "#acacac",
    },
  },
  shadows: [
    "none",
    "0px 4px 20px 0px hsla(0,0%,0%,0.15)",
    "0px 4px 20px 0px hsla(0,0%,0%,0.25)",
    "0px 4px 20px 0px hsla(0,0%,0%,0.35)",
    "0px 4px 20px 0px hsla(0,0%,0%,0.45)",
    ...Array(20).fill("0px 5px 30px 0px hsla(0,0%,0%,0.14)"),
  ],
});

export const darkTheme = createTheme({
  ...commonStyles,
  ...(commonStyles.components.MuiOutlinedInput = {
    styleOverrides: {
      root: {
        backgroundColor: "#212529",
      },
    },
  }),

  palette: {
    mode: "dark",

    primary: {
      main: "#0a85a7",
      dark: "#005269",
      contrastText: whiteColor,
      light: "#E5EFF2",
      300: "#186F88",
      200: "#E9EFF2",
    },
    secondary: {
      main: secondaryColor,
      contrastText: whiteColor,
      light: "#E5EAFF",
      dark: "#232C32",
    },
    tertiary: {
      main: blackColor,
      contrastText: "#fff",
    },
    background: {
      default: "#1A1D21",
      paper: "#212529",
    },
    text: {
      primary: whiteColor,
      secondary: "#acacac",
    },
  },
  shadows: [
    "none",
    "0px 1px 15px 0px hsla(0,0%,0%,0.35)",
    "0px 1px 15px 0px hsla(0,0%,0%,0.45)",
    "0px 1px 15px 0px hsla(0,0%,0%,0.55)",
    "0px 1px 15px 0px hsla(0,0%,0%,0.65)",
    ...Array(20).fill("0px 1px 15px 0px hsla(0,0%,0%,0.14)"),
  ],
});
