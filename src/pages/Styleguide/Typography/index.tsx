import { Typography } from "@mui/material";
import TypographyWithDivider from "../../../components/TypographyWithDivider";
import TypographyNoMargin from "../../../components/TypographyNoMargin";
import TypographyNoMarginWithDivider from "../../../components/TypographyNoMarginWithDivider";

const TypographyPage = () => {
  return (
    <>
      <TypographyNoMarginWithDivider variant='h2'>Typography</TypographyNoMarginWithDivider>

      <TypographyWithDivider variant='h3'>Variants overview</TypographyWithDivider>
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

      <TypographyWithDivider variant='h3'>Typography with no margin</TypographyWithDivider>
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

      <TypographyWithDivider variant='h3'>Typography with divider</TypographyWithDivider>
      <TypographyWithDivider variant='h1' sx={{ width: "fit-content" }}>
        Heading 1
      </TypographyWithDivider>
      <TypographyWithDivider variant='h2' sx={{ width: "fit-content" }}>
        Heading 2
      </TypographyWithDivider>
      <TypographyWithDivider variant='h3' sx={{ width: "fit-content" }}>
        Heading 3
      </TypographyWithDivider>
      <TypographyWithDivider variant='h4' sx={{ width: "fit-content" }}>
        Heading 4
      </TypographyWithDivider>
      <TypographyWithDivider variant='h5' sx={{ width: "fit-content" }}>
        Heading 5
      </TypographyWithDivider>
      <TypographyWithDivider variant='h6' sx={{ width: "fit-content" }}>
        Heading 6
      </TypographyWithDivider>
      <TypographyWithDivider variant='subtitle1' sx={{ width: "fit-content" }}>
        Subtitle 1
      </TypographyWithDivider>
      <TypographyWithDivider variant='body1' sx={{ width: "fit-content" }}>
        Body1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </TypographyWithDivider>
      <TypographyWithDivider variant='subtitle2' sx={{ width: "fit-content" }}>
        Subtitle 2
      </TypographyWithDivider>
      <TypographyWithDivider variant='body2' sx={{ width: "fit-content" }}>
        Body2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </TypographyWithDivider>
      <TypographyWithDivider variant='caption' sx={{ width: "fit-content" }}>
        Caption. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </TypographyWithDivider>
    </>
  );
};

export default TypographyPage;
