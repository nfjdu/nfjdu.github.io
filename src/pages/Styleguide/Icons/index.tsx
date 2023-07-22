import { Stack, Typography } from "@mui/material";
import HeadingWithDivider from "../../../components/HeadingWithDivider";
import AppIcon from "../../../components/AppIcon";

const IconsPage = () => {
  return (
    <>
      <HeadingWithDivider variant='h3'>Icons</HeadingWithDivider>
      <Stack direction='row' sx={{ mt: 2, flexWrap: "wrap" }} gap={4}>
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
        <Stack sx={{ alignItems: "center" }}>
          <AppIcon icon='expand-more' />
          <Typography>ExpandMore</Typography>
        </Stack>
        <Stack sx={{ alignItems: "center" }}>
          <AppIcon icon='expand-less' />
          <Typography>ExpandLess</Typography>
        </Stack>
        <Stack sx={{ alignItems: "center" }}>
          <AppIcon icon='email' />
          <Typography>Email</Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default IconsPage;
