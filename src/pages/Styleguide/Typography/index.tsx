import { Typography } from "@mui/material";
import HeadingWithDivider from "../../../components/HeadingWithDivider";
import TypographyNoMargin from "../../../components/TypographyNoMargin";

const TypographyPage = () => {
  return (
    <>
      <HeadingWithDivider variant='h3'>Typography</HeadingWithDivider>

      <HeadingWithDivider variant='h4'>Variant examples</HeadingWithDivider>
      <Typography variant='h1'>Heading 1</Typography>
      <Typography variant='h2'>Heading 2</Typography>
      <Typography variant='h3'>Heading 3</Typography>
      <Typography variant='h4'>Heading 4</Typography>
      <Typography variant='h5'>Heading 5</Typography>
      <Typography variant='h6'>Heading 6</Typography>
      <Typography variant='subtitle1'>Subtitle 1</Typography>
      <Typography variant='body1'>
        Body1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Typography variant='subtitle2'>Subtitle 2</Typography>
      <Typography variant='body2'>
        Body2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Typography variant='caption'>
        Caption. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </Typography>

      <HeadingWithDivider variant='h4'>Heading with divider</HeadingWithDivider>
      <HeadingWithDivider variant='h6' sx={{ width: "50%" }}>
        Lorem ipsum
      </HeadingWithDivider>

      <HeadingWithDivider variant='h4'>Typography with no margin</HeadingWithDivider>
      <TypographyNoMargin variant='h1'>Heading 1</TypographyNoMargin>
      <TypographyNoMargin variant='h2'>Heading 2</TypographyNoMargin>
      <TypographyNoMargin variant='h3'>Heading 3</TypographyNoMargin>
      <TypographyNoMargin variant='h4'>Heading 4</TypographyNoMargin>
      <TypographyNoMargin variant='h5'>Heading 5</TypographyNoMargin>
      <TypographyNoMargin variant='h6'>Heading 6</TypographyNoMargin>
      <TypographyNoMargin variant='subtitle1'>Subtitle 1</TypographyNoMargin>
      <TypographyNoMargin variant='body1'>
        Body1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </TypographyNoMargin>
      <TypographyNoMargin variant='subtitle2'>Subtitle 2</TypographyNoMargin>
      <TypographyNoMargin variant='body2'>
        Body2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </TypographyNoMargin>
      <TypographyNoMargin variant='caption'>
        Caption. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </TypographyNoMargin>
    </>
  );
};

export default TypographyPage;
