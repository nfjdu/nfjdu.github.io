import { ThemeOptions, createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";
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

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  status: {
    danger: orange[500],
  },
};
const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  status: {
    danger: orange[500],
  },
};
const themeOptions = {
  light: lightThemeOptions,
  dark: darkThemeOptions,
};

export const createCustomTheme = (theme: THEME) => {
  return createTheme(themeOptions[theme]);
};
