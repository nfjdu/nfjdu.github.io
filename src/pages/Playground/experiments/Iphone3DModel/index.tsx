import { Box } from "@mui/material";
import IphoneScene from "./IphoneScene";

const GraphicsModelsPage = () => {
  return (
    <Box
      component='div'
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "400px",
      }}
    >
      <IphoneScene />
    </Box>
  );
};

export default GraphicsModelsPage;
