import { Button, IconButton, Stack } from "@mui/material";
import HeadingWithDivider from "../../../components/HeadingWithDivider";
import AppIcon from "../../../components/AppIcon";
import TypographyNoMargin from "../../../components/TypographyNoMargin";

const ButtonsPage = () => {
  return (
    <>
      <HeadingWithDivider variant='h2'>Buttons</HeadingWithDivider>
      <Stack sx={{ mt: 2 }} gap={1}>
        <Stack direction='row' sx={{ alignItems: "center" }} gap={1}>
          <TypographyNoMargin>Icon button: </TypographyNoMargin>
          <IconButton>
            <AppIcon icon='linkedin' />
          </IconButton>
        </Stack>
        <Stack direction='row' sx={{ alignItems: "center" }} gap={1}>
          <TypographyNoMargin>Button: </TypographyNoMargin>
          <Button>I'm button</Button>
        </Stack>
      </Stack>
    </>
  );
};

export default ButtonsPage;
