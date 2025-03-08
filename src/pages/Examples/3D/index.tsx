import { Alert, Stack, Typography } from "@mui/material";
import { GraphicsExampleWrapper } from "../../../components/GraphicsExampleWrapper";
import IphoneScene from "./Iphone3DModel/IphoneScene";

const $3DPage = () => {
  return (
    <>
      <Typography variant='h2'>3D</Typography>

      <Alert variant='outlined' severity='info'>
        Work in progress...
      </Alert>

      <Stack
        sx={{
          mt: 2,
          display: "grid",
          gridTemplateColumns: {
            xxs: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
          },
        }}
        gap={2}
      >
        <GraphicsExampleWrapper>
          <IphoneScene />
        </GraphicsExampleWrapper>
      </Stack>
    </>
  );
};

export default $3DPage;
