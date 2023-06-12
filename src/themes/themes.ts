import { ThemeOptions, createTheme } from "@mui/material";
import merge from "lodash/merge";
import { THEME } from "../constants/themes";

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
    background2: Palette["primary"];
  }

  interface PaletteOptions {
    background2: PaletteOptions["primary"];
  }
}

const baseOptions: ThemeOptions = {
  typography: {
    fontFamily: ['"Advanced Pixel"', "monospace"].join(","),
    h1: {
      fontSize: "5rem",
      fontFamily: "Karma Future",
      "@media (max-width:600px)": {
        fontSize: "4rem",
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
      lineHeight: 1,
      fontWeight: 600,
      marginTop: "0.2em",
      marginBottom: "0.1em",
    },
    subtitle2: {
      fontSize: "1.6rem",
      "@media (max-width:600px)": {
        fontSize: "1.4rem",
      },
      lineHeight: 1,
      fontWeight: 600,
      marginTop: "0.2em",
      marginBottom: "0.1em",
    },
    body1: {
      fontSize: "1.8rem",
      "@media (max-width:600px)": {
        fontSize: "1.6rem",
      },
      lineHeight: 1,
    },
    body2: {
      fontSize: "1.6rem",
      "@media (max-width:600px)": {
        fontSize: "1.4rem",
      },
      lineHeight: 1,
    },
    button: {
      fontSize: "1.4rem",
      "@media (max-width:600px)": {
        fontSize: "1.2rem",
      },
    },
    caption: {
      fontSize: "1.4rem",
      lineHeight: 0.8,
      fontStyle: "italic",
      "@media (max-width:600px)": {
        fontSize: "1.2rem",
      },
    },
    overline: {},
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
        },
        "#root": {
          height: "100%",
          width: "100%",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontWeight: "bold",
          textTransform: "uppercase",
          padding: "8px 16px",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
          "&.MuiButton-text": {
            fontSize: "1.4rem",
            "@media (max-width:600px)": {
              fontSize: "1.2rem",
            },
            lineHeight: "normal",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.background2.contrastText,
          background: theme.palette.primary.main,
          border: `1px solid ${theme.palette.background.paper}`,
          boxShadow: theme.shadows[1],
          borderRadius: "0",
          minWidth: "40px",
          height: "40px",
          paddingRight: "16px",
          paddingLeft: "16px",
          "& .MuiSvgIcon-root": {
            width: "100%",
            height: "100%",
          },
          "&:hover": {
            background: theme.palette.primary.main,
          },
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
      paper: "#f5f5f5", // Light Gray
    },
    background2: {
      main: "#e0e0e0",
      contrastText: "#f5f5f5",
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
    background2: {
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
