import { Box } from "@mui/material";
import { GraphicsExampleWrapper } from "../../../../components/GraphicsExampleWrapper";
import CustomScene1 from "./CustomScene1";

interface Props {}

const GraphicsOtherPage = ({}: Props) => {
  return (
    <Box sx={{ mt: 2, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
      <GraphicsExampleWrapper>
        <CustomScene1 />
      </GraphicsExampleWrapper>
    </Box>
  );
};

export default GraphicsOtherPage;
