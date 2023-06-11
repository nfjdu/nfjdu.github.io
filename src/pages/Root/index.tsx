import { Box, Button, Typography } from "@mui/material";

const RootPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflowX: "hidden",
        p: 3,
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
    >
      <Typography variant='h1'>Heading 1</Typography>
      <Typography variant='body1'>
        My name is Edward Hinrichsen and I have recently completed a Bachelor of Science, majoring
      </Typography>
      <Typography variant='subtitle1'>Subtitle 1</Typography>
      <Typography variant='body1'>
        My name is Edward Hinrichsen and I have recently completed a Bachelor of Science, majoring
      </Typography>
      <Typography variant='subtitle2'>Subtitle 2</Typography>
      <Typography variant='body2'>
        My name is Edward Hinrichsen and I have recently completed a Bachelor of Science, majoring
      </Typography>

      <Typography variant='h2'>Heading 2</Typography>
      <Typography variant='body1'>
        My name is Edward Hinrichsen and I have recently completed a Bachelor of Science, majoring
      </Typography>
      <Typography variant='subtitle1'>Subtitle 1</Typography>
      <Typography variant='body1'>
        My name is Edward Hinrichsen and I have recently completed a Bachelor of Science, majoring
      </Typography>
      <Typography variant='subtitle2'>Subtitle 2</Typography>
      <Typography variant='body2'>
        My name is Edward Hinrichsen and I have recently completed a Bachelor of Science, majoring
      </Typography>

      <Typography variant='h3'>Heading 3</Typography>
      <Typography variant='body1'>
        My name is Edward Hinrichsen and I have recently completed a Bachelor of Science, majoring
      </Typography>
      <Typography variant='subtitle1'>Subtitle 1</Typography>
      <Typography variant='body1'>
        My name is Edward Hinrichsen and I have recently completed a Bachelor of Science, majoring
      </Typography>
      <Typography variant='subtitle2'>Subtitle 2</Typography>
      <Typography variant='body2'>
        My name is Edward Hinrichsen and I have recently completed a Bachelor of Science, majoring
      </Typography>

      <Typography variant='h4'>Heading 4</Typography>
      <Typography variant='body1'>
        My name is Edward Hinrichsen and I have recently completed a Bachelor of Science, majoring
      </Typography>
      <Typography variant='subtitle1'>Subtitle 1</Typography>
      <Typography variant='body1'>
        My name is Edward Hinrichsen and I have recently completed a Bachelor of Science, majoring
      </Typography>
      <Typography variant='subtitle2'>Subtitle 2</Typography>
      <Typography variant='body2'>
        My name is Edward Hinrichsen and I have recently completed a Bachelor of Science, majoring
      </Typography>

      <Typography variant='h5'>Heading 5</Typography>
      <Typography variant='body1'>
        My name is Edward Hinrichsen and I have recently completed a Bachelor of Science, majoring
      </Typography>
      <Typography variant='subtitle1'>Subtitle 1</Typography>
      <Typography variant='body1'>
        My name is Edward Hinrichsen and I have recently completed a Bachelor of Science, majoring
      </Typography>
      <Typography variant='subtitle2'>Subtitle 2</Typography>
      <Typography variant='body2'>
        My name is Edward Hinrichsen and I have recently completed a Bachelor of Science, majoring
      </Typography>

      <Typography variant='h6'>Heading 6</Typography>
      <Typography variant='body1'>
        My name is Edward Hinrichsen and I have recently completed a Bachelor of Science, majoring
      </Typography>
      <Typography variant='subtitle1'>Subtitle 1</Typography>
      <Typography variant='body1'>
        My name is Edward Hinrichsen and I have recently completed a Bachelor of Science, majoring
      </Typography>
      <Typography variant='subtitle2'>Subtitle 2</Typography>
      <Typography variant='body2'>
        My name is Edward Hinrichsen and I have recently completed a Bachelor of Science, majoring
      </Typography>

      <br />
      <Typography variant='button'>Button text</Typography>
      <Button>Button text</Button>
      <br />

      <Typography variant='caption'>
        My name is Edward Hinrichsen and I have recently completed a Bachelor of Science, majoring
      </Typography>
      <br />
    </Box>
  );
};

export default RootPage;
