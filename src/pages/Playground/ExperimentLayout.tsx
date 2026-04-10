import { Box, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ExperimentLayout = () => {
  const navigate = useNavigate();

  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
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
    </MotionBox>
  );
};

export default ExperimentLayout;
