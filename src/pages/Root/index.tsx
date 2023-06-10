import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

const RootPage = () => {
  const [count, setCount] = useState(0);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
    >
      <Typography variant='h1' sx={{ fontFamily: "Karma Future" }}>
        Vite + React
      </Typography>
      <Button
        sx={{ backgroundColor: (theme) => theme.palette.primary.main }}
        variant='contained'
        onClick={() => setCount((_count) => _count + 1)}
      >
        count is {count}
      </Button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </Box>
  );
};

export default RootPage;
