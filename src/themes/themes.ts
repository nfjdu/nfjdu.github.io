import { ThemeOptions, createTheme } from "@mui/material";
import merge from "lodash/merge";
import { THEME } from "../constants/themes";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const baseOptions: ThemeOptions = {
  typography: {
    fontFamily: [
      '"Advanced Pixel"',
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
    h1: { fontFamily: "Karma Future", marginTop: "0.4em", marginBottom: "0.2em" },
    h2: { fontFamily: "Karma Future", marginTop: "0.4em", marginBottom: "0.2em" },
    h3: { fontFamily: "Karma Future", marginTop: "0.4em", marginBottom: "0.2em" },
    h4: { fontFamily: "Karma Future", marginTop: "0.4em", marginBottom: "0.2em" },
    h5: { fontFamily: "Karma Future", marginTop: "0.4em", marginBottom: "0.2em" },
    h6: { fontFamily: "Karma Future", marginTop: "0.4em", marginBottom: "0.2em" },
    subtitle1: { fontSize: "1.4em", lineHeight: 1.2, fontWeight: 600 },
    subtitle2: { fontSize: "1.2em", lineHeight: 1.2, fontWeight: 600 },
    body1: {
      fontSize: "1.4em",
      lineHeight: 0.8,
    },
    body2: {
      fontSize: "1.2em",
      lineHeight: 0.8,
    },
    button: { fontSize: "1.2em" },
    caption: { fontSize: "1.2em", lineHeight: 0.8, fontStyle: "italic" },
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
            fontSize: "1.2em",
            lineHeight: "normal",
          },
        },
      },
    },
  },
};

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    background: {
      default: "#ffffff", // White
      paper: "#f5f5f5", // Light Gray
    },
    primary: {
      main: "#2b7ce9", // Light Blue
    },
    secondary: {
      main: "#f50057", // Pink
    },
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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontWeight: "bold",
          textTransform: "uppercase",
          fontSize: "12px",
          padding: "8px 16px",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        contained: {
          backgroundColor: "#2b7ce9", // Light Blue
          color: "#ffffff", // White
          "&:hover": {
            backgroundColor: "#007bff", // Blue
          },
        },
        outlined: {
          color: "#2b7ce9", // Light Blue
          border: "1px solid #2b7ce9", // Light Blue
          "&:hover": {
            backgroundColor: "#2b7ce9", // Light Blue
            color: "#ffffff", // White
          },
        },
      },
    },
  },
};
const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    background: {
      default: "#303030", // Dark Gray
      paper: "#424242", // Gray
    },
    primary: {
      main: "#ff4081", // Magenta
    },
    secondary: {
      main: "#e91e63", // Dark Pink
    },
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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontWeight: "bold",
          textTransform: "uppercase",
          fontSize: "12px",
          padding: "8px 16px",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        contained: {
          backgroundColor: "#ff4081", // Magenta
          color: "#ffffff", // White
          "&:hover": {
            backgroundColor: "#ff0066", // Dark Magenta
          },
        },
        outlined: {
          color: "#ff4081", // Magenta
          border: "1px solid #ff4081", // Magenta
          "&:hover": {
            backgroundColor: "#ff4081", // Magenta
            color: "#ffffff", // White
          },
        },
      },
    },
  },
};
const themeOptions = {
  [THEME.LIGHT]: lightThemeOptions,
  [THEME.DARK]: darkThemeOptions,
};

export const createCustomTheme = (theme: THEME) => {
  const mergedOptions = merge({}, baseOptions, themeOptions[theme]);
  return createTheme(mergedOptions as unknown as ThemeOptions);
};
