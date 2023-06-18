import { ThemeOptions, createTheme } from "@mui/material";
import merge from "lodash/merge";
import { THEME } from "../constants/themes";
import { isMobile } from "mobile-device-detect";

declare module "@mui/material/styles" {
  // interface Theme {
  //   status: {
  //     danger: string;
  //   };
  // }
  // // allow configuration using `createTheme`
  // interface ThemeOptions {
  //   status?: {
  //     danger?: string;
  //   };
  // }

  interface Palette {
    menuBackground: Palette["primary"];
  }

  interface PaletteOptions {
    menuBackground: PaletteOptions["primary"];
  }
}

const baseOptions: ThemeOptions = {
  typography: {
    fontFamily: ['"Advanced Pixel"', "monospace"].join(","),
    h1: {
      fontSize: "4.5rem",
      fontFamily: "Karma Future",
      "@media (max-width:600px)": {
        fontSize: "3.5rem",
      },
      marginTop: "0.4em",
      marginBottom: "0.2em",
      hyphens: "manual",
    },
    h2: {
      fontSize: "3.5rem",
      fontFamily: "Karma Future",
      marginTop: "0.4em",
      marginBottom: "0.2em",
      "@media (max-width:600px)": {
        fontSize: "3rem",
      },
      hyphens: "manual",
    },
    h3: {
      fontSize: "3rem",
      fontFamily: "Karma Future",
      marginTop: "0.4em",
      marginBottom: "0.2em",
      "@media (max-width:600px)": {
        fontSize: "2.5rem",
      },
      hyphens: "manual",
    },
    h4: {
      fontSize: "2.5rem",
      fontFamily: "Karma Future",
      marginTop: "0.4em",
      marginBottom: "0.2em",
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h5: {
      fontSize: "2rem",
      fontFamily: "Karma Future",
      marginTop: "0.4em",
      marginBottom: "0.2em",
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    h6: {
      fontSize: "1.5rem",
      fontFamily: "Karma Future",
      marginTop: "0.4em",
      marginBottom: "0.2em",
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },
    subtitle1: {
      fontSize: "1.8rem",
      "@media (max-width:600px)": {
        fontSize: "1.6rem",
      },
      lineHeight: 0.8,
      fontWeight: 600,
      marginTop: "0.3em",
      marginBottom: "0.15em",
    },
    subtitle2: {
      fontSize: "1.6rem",
      "@media (max-width:600px)": {
        fontSize: "1.4rem",
      },
      lineHeight: 0.8,
      fontWeight: 600,
      marginTop: "0.3em",
      marginBottom: "0.15em",
    },
    body1: {
      fontSize: "1.8rem",
      "@media (max-width:600px)": {
        fontSize: "1.6rem",
      },
      lineHeight: 0.9,
      marginBottom: "0.6em",
    },
    body2: {
      fontSize: "1.6rem",
      "@media (max-width:600px)": {
        fontSize: "1.4rem",
      },
      lineHeight: 1,
      marginBottom: "0.3em",
    },
    button: {
      fontSize: "1.4rem",
      "@media (max-width:600px)": {
        fontSize: "1.2rem",
      },
    },
    caption: {
      fontSize: "1.5rem",
      lineHeight: 0.8,
      fontStyle: "italic",
      "@media (max-width:600px)": {
        fontSize: "1.3rem",
      },
      marginTop: "0.2em",
    },
    overline: {},
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
        },
        html: {
          fontSize: 16,
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
          height: "100%",
          width: "100%",
        },
        body: {
          height: "100%",
          width: "100%",
          marginTop: 0,
        },
        "#root": {
          height: "100%",
          width: "100%",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.menuBackground.contrastText,
          background: theme.palette.primary.main,
          border: `1px solid ${theme.palette.background.paper}`,
          boxShadow: theme.shadows[1],
          borderRadius: theme.shape.borderRadius,
          paddingRight: theme.spacing(2),
          paddingLeft: theme.spacing(2),
          transition: "all 0.2s",
          zIndex: 0,
          "&:hover": {
            ...(isMobile
              ? {}
              : {
                  zIndex: 1,
                  transform: "scale(1.1)",
                }),
            background: theme.palette.primary.main,
          },
          "&:active": {
            transform: "scale(1.05)",
          },
          "&.MuiButton-text": {
            fontSize: "1.4rem",
            lineHeight: "normal",
            "@media (max-width:600px)": {
              fontSize: "1.2rem",
            },
          },
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.menuBackground.contrastText,
          background: theme.palette.primary.main,
          border: `1px solid ${theme.palette.background.paper}`,
          boxShadow: theme.shadows[1],
          borderRadius: theme.shape.borderRadius,
          paddingRight: theme.spacing(2),
          paddingLeft: theme.spacing(2),
          transition: "all 0.2s",
          zIndex: 0,
          "&:hover": {
            ...(isMobile
              ? {}
              : {
                  zIndex: 1,
                  transform: "scale(1.1)",
                }),
            background: theme.palette.primary.main,
          },
          "&:active": {
            transform: "scale(1.05)",
          },
        }),
      },
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          textDecorationColor: theme.palette.text.primary,
        }),
      },
    },
  },
};

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    text: {
      primary: "#525252",
    },
    divider: "#525252",
    background: {
      default: "#ffffff", // White
      paper: "#fafafa", // Light Gray
    },
    menuBackground: {
      main: "#f5f5f5",
      contrastText: "#fafafa",
    },
    primary: {
      main: "#525252", // Dark grey
    },
    // secondary: {},
    error: {
      main: "#ff3d00", // Orange
    },
    warning: {
      main: "#ffc400", // Amber
    },
    info: {
      main: "#00bcd4", // Cyan
    },
    success: {
      main: "#4caf50", // Green
    },
  },
  shadows: [
    "none",
    "6px 6px 0px rgba(82, 82, 82, 0.25)",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  components: {},
};

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    text: {
      primary: "#f5f5f5",
    },
    divider: "#f5f5f5",
    background: {
      paper: "#424242", // Dark gray
    },
    menuBackground: {
      main: "#616161",
      contrastText: "#424242",
    },
    primary: {
      main: "#f5f5f5", // Light gray
    },
    // secondary: {},
    error: {
      main: "#f44336", // Red
    },
    warning: {
      main: "#ff9800", // Dark Orange
    },
    info: {
      main: "#03a9f4", // Light Blue
    },
    success: {
      main: "#8bc34a", // Lime Green
    },
  },
  shadows: [
    "none",
    "6px 6px 0px rgba(255, 255, 255, 0.15)",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  components: {},
};
const themeOptions = {
  [THEME.LIGHT]: lightThemeOptions,
  [THEME.DARK]: darkThemeOptions,
};

export const createCustomTheme = (theme: THEME) => {
  const mergedOptions = merge({}, baseOptions, themeOptions[theme]);
  return createTheme(mergedOptions as unknown as ThemeOptions);
};
