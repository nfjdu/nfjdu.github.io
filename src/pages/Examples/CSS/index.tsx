import { Alert, Stack, Typography } from "@mui/material";
import { GraphicsExampleWrapper } from "../../../components/GraphicsExampleWrapper";
import TypewriterEffect from "./TypewriterEffect";
import GradientTextEffect from "./GradientTextEffect";
import GlassmorphizmCube from "./GlassmorphizmCube";

const CssPage = () => {
  return (
    <>
      <Typography variant='h2'>CSS</Typography>

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

        <GraphicsExampleWrapper>
          <GradientTextEffect />
        </GraphicsExampleWrapper>

        <GraphicsExampleWrapper>
          <GlassmorphizmCube />
        </GraphicsExampleWrapper>
      </Stack>
    </>
  );
};

export default CssPage;
