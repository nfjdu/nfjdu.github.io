import { Box } from "@mui/material";
import { GraphicsExampleWrapper } from "../../../../components/GraphicsExampleWrapper";
import IphoneScene from "./IphoneScene";

interface Props {}

const GraphicsModelsPage = ({}: Props) => {
  return (
    <Box component='div' sx={{ mt: 2, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
      <GraphicsExampleWrapper>
        <IphoneScene />
      </GraphicsExampleWrapper>
    </Box>
  );
};

export default GraphicsModelsPage;
