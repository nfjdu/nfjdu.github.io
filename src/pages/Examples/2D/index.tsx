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
          <CharsMadeOfChars />
        </GraphicsExampleWrapper>
      </Stack>
    </>
  );
};

export default $2DPage;
