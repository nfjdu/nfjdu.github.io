import { ThemeOptions, createTheme, darken } from "@mui/material";
import merge from "lodash/merge";
import { THEME } from "../constants/themes";
import { isMobile } from "mobile-device-detect";
import {
  FontStyleOptions,
  TypographyStyleOptions,
  TypographyUtils,
  Variant,
} from "@mui/material/styles/createTypography";

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
  interface BreakpointOverrides {
    xxs: true;
  }

  interface Palette {
    menuBackground: Palette["primary"];
  }

  interface PaletteOptions {
    menuBackground: PaletteOptions["primary"];
  }

  interface TypographyVariantsOptions
    extends Partial<Record<Variant, TypographyStyleOptions> & FontStyleOptions & TypographyUtils> {}
}

const fontSize = 14; // the default font size of the Material Specification.
const htmlFontSize = 16; // default html font size is 16px
export function pxToRemCustom(sizeInPx: number) {
  const coef = fontSize / 14;
  return `${(sizeInPx / htmlFontSize) * coef}rem`;
}

const baseOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xxs: 0,
      xs: 300,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    pxToRem: pxToRemCustom,
    fontSize,
    fontFamily: ['"Advanced Pixel"', "monospace"].join(","),
    h1: {
      fontSize: pxToRemCustom(72),
      fontFamily: "Karma Future",
      "@media (max-width:600px)": {
        fontSize: pxToRemCustom(56),
      },
      marginTop: "0.4em",
      marginBottom: "0.2em",
      hyphens: "manual",
    },
    h2: {
      fontSize: pxToRemCustom(56),
      fontFamily: "Karma Future",
      marginTop: "0.4em",
      marginBottom: "0.2em",
      "@media (max-width:600px)": {
        fontSize: pxToRemCustom(46),
      },
      hyphens: "manual",
    },
    h3: {
      fontSize: pxToRemCustom(46),
      fontFamily: "Karma Future",
      marginTop: "0.4em",
      marginBottom: "0.2em",
      "@media (max-width:600px)": {
        fontSize: pxToRemCustom(40),
      },
      hyphens: "manual",
    },
    h4: {
      fontSize: pxToRemCustom(40),
      fontFamily: "Karma Future",
      marginTop: "0.4em",
      marginBottom: "0.2em",
      "@media (max-width:600px)": {
        fontSize: pxToRemCustom(32),
      },
    },
    h5: {
      fontSize: pxToRemCustom(32),
      fontFamily: "Karma Future",
      marginTop: "0.4em",
      marginBottom: "0.2em",
      "@media (max-width:600px)": {
        fontSize: pxToRemCustom(26),
      },
    },
    h6: {
      fontSize: pxToRemCustom(26),
      fontFamily: "Karma Future",
      marginTop: "0.4em",
      marginBottom: "0.2em",
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },
    subtitle1: {
      fontSize: pxToRemCustom(28),
      "@media (max-width:600px)": {
        fontSize: pxToRemCustom(26),
      },
      lineHeight: 0.8,
      fontWeight: 600,
      marginTop: "0.3em",
      marginBottom: "0.15em",
    },
    subtitle2: {
      fontSize: pxToRemCustom(26),
      "@media (max-width:600px)": {
        fontSize: pxToRemCustom(22),
      },
      lineHeight: 0.8,
      fontWeight: 600,
      marginTop: "0.3em",
      marginBottom: "0.15em",
    },
    body1: {
      fontSize: pxToRemCustom(28),
      "@media (max-width:600px)": {
        fontSize: pxToRemCustom(26),
      },
      lineHeight: 0.9,
      marginBottom: "0.6em",
      letterSpacing: "0.03em",
    },
    body2: {
      fontSize: pxToRemCustom(26),
      "@media (max-width:600px)": {
        fontSize: pxToRemCustom(22),
      },
      lineHeight: 1,
      marginBottom: "0.3em",
      letterSpacing: "0.04em",
    },
    button: {},
    caption: {
      fontSize: pxToRemCustom(22),
      lineHeight: 0.8,
      fontStyle: "italic",
      "@media (max-width:600px)": {
        fontSize: pxToRemCustom(20),
      },
      marginTop: "0.2em",
      marginBottom: "0.4em",
      letterSpacing: "0.04em",
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
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
          height: "100%",
          width: "100%",
          scrollBehavior: "smooth",

          cursor: "url('/Normal select.cur'), auto",
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
      styleOverrides: {
        root: {
          cursor: "url('/Link select.cur'), pointer",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderBottomWidth: "medium",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.menuBackground.contrastText,
          background: theme.palette.primary.main,
          boxShadow: theme.shadows[2],
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
          boxShadow: theme.shadows[2],
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
          cursor: "url('/Link select.cur'), auto",
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          cursor: "url('/Normal select.cur'), auto",
          color: theme.palette.primary.main,
          background: theme.palette.background.paper,
          border: `1px dashed ${theme.palette.primary.main}`,
          boxShadow: theme.shadows[1],
          borderRadius: theme.shape.borderRadius,
          paddingRight: theme.spacing(1),
          paddingLeft: theme.spacing(1),
          fontSize: "1.4rem",
          letterSpacing: "0.05em",
        }),
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontWeight: "600",
          borderStyle: "dashed",
          borderWidth: "2px",
          "& .MuiAlert-icon": {
            alignItems: "center",
          },
        }),
      },
      variants: [
        {
          props: { severity: "info" },
          style: ({ theme }) => {
            return {
              color: darken(theme.palette.info.main, 0.1),
            };
          },
        },
        {
          props: { severity: "success" },
          style: ({ theme }) => {
            return {
              color: darken(theme.palette.success.main, 0.1),
            };
          },
        },
        {
          props: { severity: "warning" },
          style: ({ theme }) => {
            return {
              color: darken(theme.palette.warning.main, 0.1),
            };
          },
        },
        {
          props: { severity: "error" },
          style: ({ theme }) => {
            return {
              color: darken(theme.palette.error.main, 0.1),
            };
          },
        },
      ],
    },
  },
};

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    text: {
      primary: "#424242",
    },
    divider: "#424242",
    background: {
      default: "#ffffff", // White
      paper: "#fafafa", // Light Gray
    },
    menuBackground: {
      main: "#f5f5f5",
      contrastText: "#fafafa",
    },
    primary: {
      main: "#424242", // Dark grey
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
    "1px 1px 0px #fafafa, 3px 3px 0px rgba(82, 82, 82, 0.25)",
    "1px 1px 0px #fafafa, 6px 6px 0px rgba(82, 82, 82, 0.25)",
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
      paper: "#303030", // Dark gray
    },
    menuBackground: {
      main: "#404040",
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
    "1px 1px 0px #424242, 3px 3px 0px rgba(255, 255, 255, 0.15)",
    "1px 1px 0px #424242, 6px 6px 0px rgba(255, 255, 255, 0.15)",
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
