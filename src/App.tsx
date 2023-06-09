import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Box, Button, ThemeProvider } from "@mui/material";
import { createCustomTheme } from "./themes/themes";
import { THEME } from "./constants/themes";

interface Props {
  themeName: THEME;
}
function App({ themeName = THEME.LIGHT }: Props) {
  const [count, setCount] = useState(0);
  const theme = createCustomTheme(themeName);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Box
        sx={{ backgroundColor: theme.palette.background.paper }}
        className="card"
      >
        <Button
          sx={{ backgroundColor: theme.status.danger }}
          variant="contained"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Box>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </ThemeProvider>
  );
}

export default App;
