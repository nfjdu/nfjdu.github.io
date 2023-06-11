import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflowX: "hidden",
        p: 3,
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
    >
      <Outlet />
    </Box>
  );
};

export default RootPage;
