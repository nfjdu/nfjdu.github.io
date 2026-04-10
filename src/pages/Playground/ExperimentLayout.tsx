import { Box, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ExperimentLayout = () => {
  const navigate = useNavigate();

  return (
    <MotionBox
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        pt: 10,
      }}
    >
      <IconButton
        onClick={() => navigate("/playground")}
        sx={{
          position: "fixed",
          top: 80,
          left: 20,
          zIndex: 1000,
        }}
        aria-label="Back to playground"
      >
        <ArrowBack />
      </IconButton>
      <Outlet />
    </MotionBox>
  );
};

export default ExperimentLayout;

