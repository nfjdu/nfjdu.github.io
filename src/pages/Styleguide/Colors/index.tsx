import { Box, Stack } from "@mui/material";
import HeadingWithDivider from "../../../components/HeadingWithDivider";
import TypographyNoMargin from "../../../components/TypographyNoMargin";

const ColorsPage = () => {
  return (
    <>
      <HeadingWithDivider variant='h3'>Colors</HeadingWithDivider>
      <Stack sx={{ mt: 2 }} spacing={2}>
        <Stack direction='row' spacing={2}>
          <TypographyNoMargin>Background: </TypographyNoMargin>
          <Box
            sx={{ width: "150px", border: "1px solid black", backgroundColor: "background.paper" }}
          />
        </Stack>
        <Stack direction='row' spacing={1}>
          <TypographyNoMargin>Menu background: </TypographyNoMargin>
          <Box
            sx={{
              width: "150px",
              border: "1px solid black",
              backgroundColor: "menuBackground.main",
            }}
          />
        </Stack>
        <Stack direction='row' spacing={1}>
          <TypographyNoMargin>Text: </TypographyNoMargin>
          <Box
            sx={{ width: "150px", border: "1px solid black", backgroundColor: "text.primary" }}
          />
        </Stack>
        <Stack direction='row' spacing={1}>
          <TypographyNoMargin>Divider: </TypographyNoMargin>
          <Box sx={{ width: "150px", border: "1px solid black", backgroundColor: "divider" }} />
        </Stack>
        <Stack direction='row' spacing={1}>
          <TypographyNoMargin>Error: </TypographyNoMargin>
          <Box sx={{ width: "150px", border: "1px solid black", backgroundColor: "error.main" }} />
        </Stack>
        <Stack direction='row' spacing={1}>
          <TypographyNoMargin>Warning: </TypographyNoMargin>
          <Box
            sx={{ width: "150px", border: "1px solid black", backgroundColor: "warning.main" }}
          />
        </Stack>
        <Stack direction='row' spacing={1}>
          <TypographyNoMargin>Info: </TypographyNoMargin>
          <Box sx={{ width: "150px", border: "1px solid black", backgroundColor: "info.main" }} />
        </Stack>
        <Stack direction='row' spacing={1}>
          <TypographyNoMargin>Success: </TypographyNoMargin>
          <Box
            sx={{ width: "150px", border: "1px solid black", backgroundColor: "success.main" }}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default ColorsPage;
