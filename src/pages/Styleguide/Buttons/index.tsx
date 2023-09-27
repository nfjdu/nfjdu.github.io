import { Button, IconButton, Stack } from "@mui/material";
import AppIcon from "../../../components/AppIcon";
import TypographyNoMargin from "../../../components/TypographyNoMargin";
import TypographyNoMarginWithDivider from "../../../components/TypographyNoMarginWithDivider";

const ButtonsPage = () => {
  return (
    <>
      <TypographyNoMarginWithDivider variant='h2'>Buttons</TypographyNoMarginWithDivider>
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
