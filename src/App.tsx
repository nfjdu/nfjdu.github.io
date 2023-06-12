import { ThemeProvider } from "@mui/material";
import { createCustomTheme } from "./themes/themes";
import { THEME } from "./constants/themes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import CssBaseline from "@mui/material/CssBaseline";

const router = createBrowserRouter(routes);

interface Props {
  themeName?: THEME;
}
function App({ themeName = THEME.DARK }: Props) {
  const theme = createCustomTheme(themeName);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
