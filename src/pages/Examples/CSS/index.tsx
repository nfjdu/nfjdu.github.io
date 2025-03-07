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
          <TypewriterEffect />
        </GraphicsExampleWrapper>
      </Stack>
    </>
  );
};

export default CssPage;
