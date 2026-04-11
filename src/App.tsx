import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { createCustomTheme } from "./themes/themes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import CssBaseline from "@mui/material/CssBaseline";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import { useTheme } from "./contexts/ThemeContext";

const router = createBrowserRouter(routes);

const AppContent = () => {
  const { theme } = useTheme();
  const muiTheme = createCustomTheme(theme);

  return (
    <ErrorBoundary>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </MuiThemeProvider>
    </ErrorBoundary>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
