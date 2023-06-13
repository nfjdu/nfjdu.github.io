import { Stack, Typography } from "@mui/material";
import HeadingWithDivider from "../../../components/HeadingWithDivider";
import AppIcon from "../../../components/AppIcon";

const IconsPage = () => {
  return (
    <>
      <HeadingWithDivider variant='h2'>Icons</HeadingWithDivider>
      <Stack direction='row' sx={{ mt: 2 }} gap={2}>
        <Stack sx={{ alignItems: "center" }}>
          <AppIcon icon='menu' />
          <Typography>Menu</Typography>
        </Stack>
        <Stack sx={{ alignItems: "center" }}>
          <AppIcon icon='linkedin' />
          <Typography>LinkedIn</Typography>
        </Stack>
        <Stack sx={{ alignItems: "center" }}>
          <AppIcon icon='github' />
          <Typography>GitHub</Typography>
        </Stack>
        <Stack sx={{ alignItems: "center" }}>
          <AppIcon icon='theme' />
          <Typography>Theme</Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default IconsPage;
