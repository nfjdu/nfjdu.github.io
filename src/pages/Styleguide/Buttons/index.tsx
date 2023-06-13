import { Button, IconButton, Stack, Typography } from "@mui/material";
import HeadingWithDivider from "../../../components/HeadingWithDivider";
import AppIcon from "../../../components/AppIcon";

const ButtonsPage = () => {
  return (
    <>
      <HeadingWithDivider variant='h2'>Buttons</HeadingWithDivider>
      <Stack sx={{ mt: 2 }} gap={1}>
        <Stack direction='row' sx={{ alignItems: "center" }} gap={1}>
          <Typography>Icon button: </Typography>
          <IconButton>
            <AppIcon icon='linkedin' />
          </IconButton>
        </Stack>
        <Stack direction='row' sx={{ alignItems: "center" }} gap={1}>
          <Typography>Button: </Typography>
          <Button>I'm button</Button>
        </Stack>
      </Stack>
    </>
  );
};

export default ButtonsPage;
