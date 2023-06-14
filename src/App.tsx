import { ThemeProvider } from "@mui/material";
import { createCustomTheme } from "./themes/themes";
import { THEME } from "./constants/themes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import CssBaseline from "@mui/material/CssBaseline";
import { connect } from "react-redux";
import { AppState } from "./store";

const router = createBrowserRouter(routes);

interface Props {
  theme?: THEME;
}
function App({ theme = THEME.DARK }: Props) {
  const _theme = createCustomTheme(theme);

  return (
    <ThemeProvider theme={_theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default connect((state: AppState, _) => ({ theme: state.settings.theme }))(App);
