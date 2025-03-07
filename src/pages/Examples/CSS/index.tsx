import TypographyWithDivider from "../../../components/TypographyWithDivider";
import { Alert, Stack } from "@mui/material";
import { GraphicsExampleWrapper } from "../../../components/GraphicsExampleWrapper";
import TypewriterEffect from "./TypewriterEffect";

const CssPage = () => {
  return (
    <>
      <TypographyWithDivider variant='h2'>CSS</TypographyWithDivider>

      <Alert variant='outlined' severity='info'>
        Work in progress...
      </Alert>

      <Stack direction={{ xs: "column", md: "row" }} sx={{ mt: 2 }} gap={2}>
        <Stack direction='column' sx={{ flex: 1, gap: 2 }}>
          <GraphicsExampleWrapper>
            <TypewriterEffect />
          </GraphicsExampleWrapper>
        </Stack>
      </Stack>
    </>
  );
};

export default CssPage;
