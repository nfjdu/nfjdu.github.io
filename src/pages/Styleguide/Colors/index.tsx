import { Box, Stack, Typography } from "@mui/material";
import HeadingWithDivider from "../../../components/HeadingWithDivider";

const ColorsPage = () => {
  return (
    <>
      <HeadingWithDivider variant='h2'>Colors</HeadingWithDivider>
      <Stack sx={{ mt: 2 }} spacing={1}>
        <Stack direction='row' spacing={1}>
          <Typography>Background: </Typography>
          <Box
            sx={{ width: "150px", border: "1px solid black", backgroundColor: "background.paper" }}
          />
        </Stack>
        <Stack direction='row' spacing={1}>
          <Typography>Menu background: </Typography>
          <Box
            sx={{
              width: "150px",
              border: "1px solid black",
              backgroundColor: "menuBackground.main",
            }}
          />
        </Stack>
        <Stack direction='row' spacing={1}>
          <Typography>Text: </Typography>
          <Box
            sx={{ width: "150px", border: "1px solid black", backgroundColor: "text.primary" }}
          />
        </Stack>
        <Stack direction='row' spacing={1}>
          <Typography>Divider: </Typography>
          <Box sx={{ width: "150px", border: "1px solid black", backgroundColor: "divider" }} />
        </Stack>
        <Stack direction='row' spacing={1}>
          <Typography>Error: </Typography>
          <Box sx={{ width: "150px", border: "1px solid black", backgroundColor: "error.main" }} />
        </Stack>
        <Stack direction='row' spacing={1}>
          <Typography>Warning: </Typography>
          <Box
            sx={{ width: "150px", border: "1px solid black", backgroundColor: "warning.main" }}
          />
        </Stack>
        <Stack direction='row' spacing={1}>
          <Typography>Info: </Typography>
          <Box sx={{ width: "150px", border: "1px solid black", backgroundColor: "info.main" }} />
        </Stack>
        <Stack direction='row' spacing={1}>
          <Typography>Success: </Typography>
          <Box
            sx={{ width: "150px", border: "1px solid black", backgroundColor: "success.main" }}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default ColorsPage;
