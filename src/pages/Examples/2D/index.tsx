import TypographyWithDivider from "../../../components/TypographyWithDivider";
import { Alert, Stack } from "@mui/material";
import { GraphicsExampleWrapper } from "../../../components/GraphicsExampleWrapper";
import CharsMadeOfChars from "./CharsMadeOfChars";

const $2DPage = () => {
  return (
    <>
      <TypographyWithDivider variant='h2'>2D</TypographyWithDivider>

      <Alert variant='outlined' severity='info'>
        Work in progress...
      </Alert>

      <Stack direction={{ xs: "column", md: "row" }} sx={{ mt: 2 }} gap={2}>
        <Stack direction='column' sx={{ flex: 1 }}>
          <GraphicsExampleWrapper>
            <CharsMadeOfChars />
          </GraphicsExampleWrapper>
        </Stack>
      </Stack>
    </>
  );
};

export default $2DPage;
