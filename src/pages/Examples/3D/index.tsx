import TypographyWithDivider from "../../../components/TypographyWithDivider";
import { Alert, Stack } from "@mui/material";
import { GraphicsExampleWrapper } from "../../../components/GraphicsExampleWrapper";
import IphoneScene from "./Iphone3DModel/IphoneScene";

const $3DPage = () => {
  return (
    <>
      <TypographyWithDivider variant='h2'>3D</TypographyWithDivider>

      <Alert variant='outlined' severity='info'>
        Work in progress...
      </Alert>

      <Stack direction={{ xxs: "column", md: "row" }} sx={{ mt: 2 }} gap={2}>
        <Stack direction='column' sx={{ flex: 1 }}>
          <GraphicsExampleWrapper>
            <IphoneScene />
          </GraphicsExampleWrapper>
        </Stack>
      </Stack>
    </>
  );
};

export default $3DPage;
