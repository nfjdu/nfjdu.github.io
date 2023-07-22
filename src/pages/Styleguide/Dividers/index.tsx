import { Divider, Stack } from "@mui/material";
import HeadingWithDivider from "../../../components/HeadingWithDivider";
import TypographyNoMargin from "../../../components/TypographyNoMargin";
import DashedDivider from "../../../components/DashedDivider";

const DividersPage = () => {
  return (
    <>
      <HeadingWithDivider variant='h3'>Dividers</HeadingWithDivider>
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
