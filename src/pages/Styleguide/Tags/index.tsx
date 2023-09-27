import { Stack } from "@mui/material";
import TypographyNoMargin from "../../../components/TypographyNoMargin";
import Tag from "../../../components/Tag";
import TypographyNoMarginWithDivider from "../../../components/TypographyNoMarginWithDivider";

const TagsPage = () => {
  return (
    <>
      <TypographyNoMarginWithDivider variant='h2'>Tags</TypographyNoMarginWithDivider>
      <Stack spacing={2}>
        <Stack direction='row' sx={{ alignItems: "center" }} spacing={2}>
          <TypographyNoMargin>Default tag:</TypographyNoMargin>
          <Tag text='Lorem ipsum' />
        </Stack>
      </Stack>
    </>
  );
};

export default TagsPage;
