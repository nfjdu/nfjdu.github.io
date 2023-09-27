import { Stack } from "@mui/material";
import HeadingWithDivider from "../../../components/HeadingWithDivider";
import TypographyNoMargin from "../../../components/TypographyNoMargin";
import Tag from "../../../components/Tag";

const TagsPage = () => {
  return (
    <>
      <HeadingWithDivider variant='h2'>Tags</HeadingWithDivider>
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
