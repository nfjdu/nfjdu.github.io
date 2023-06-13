import { Button, Stack, Typography } from "@mui/material";
import HeadingWithDivider from "../../components/HeadingWithDivider";
import AppIcon from "../../components/AppIcon";

const ContactsPage = () => {
  return (
    <>
      <HeadingWithDivider variant='h1'>Contacts</HeadingWithDivider>
      <Stack direction='row' sx={{ flexWrap: "wrap" }}>
        <Typography sx={{ mr: 1 }}>Feel free to contact me with any questions:</Typography>
        <Button
          sx={{ mr: 1 }}
          LinkComponent='a'
          target='_blank'
          href='https://www.linkedin.com/in/vlad-mosienko-766910186/'
          startIcon={<AppIcon icon='linkedin' />}
        >
          LinkedIn
        </Button>
        <Button
          LinkComponent='a'
          href='mailto:mosienko20133@gmail.com'
          startIcon={<AppIcon icon='email' />}
        >
          Email
        </Button>
      </Stack>
    </>
  );
};

export default ContactsPage;
