import { Box, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate, Outlet } from "react-router-dom";

const ExperimentLayout = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <IconButton
        onClick={() => navigate("/playground")}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
        aria-label='Back to playground'
      >
        <ArrowBack />
      </IconButton>
      <Outlet />
    </Box>
  );
};

export default ExperimentLayout;
