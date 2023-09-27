import { Divider, Stack } from "@mui/material";
import TypographyNoMargin from "../../../components/TypographyNoMargin";
import DashedDivider from "../../../components/DashedDivider";
import TypographyNoMarginWithDivider from "../../../components/TypographyNoMarginWithDivider";

const DividersPage = () => {
  return (
    <>
      <TypographyNoMarginWithDivider variant='h2'>Dividers</TypographyNoMarginWithDivider>
      <Stack spacing={2}>
        <Stack direction='row' sx={{ alignItems: "center" }} spacing={2}>
          <TypographyNoMargin>Default divider:</TypographyNoMargin>
          <Divider sx={{ flex: 1 }} />
        </Stack>
        <Stack direction='row' sx={{ alignItems: "center" }} spacing={2}>
          <TypographyNoMargin>Dashed divider:</TypographyNoMargin>
          <DashedDivider sx={{ flex: 1 }} />
        </Stack>
      </Stack>
    </>
  );
};

export default DividersPage;
