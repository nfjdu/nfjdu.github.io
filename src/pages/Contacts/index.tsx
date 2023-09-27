import { Button, Stack } from "@mui/material";
import TypographyWithDivider from "../../components/TypographyWithDivider";
import AppIcon from "../../components/AppIcon";
import TypographyNoMargin from "../../components/TypographyNoMargin";

const ContactsPage = () => {
  return (
    <>
      <TypographyWithDivider variant='h1'>Contacts</TypographyWithDivider>
      <Stack direction='row' sx={{ flexWrap: "wrap", alignItems: "center" }}>
        <TypographyNoMargin sx={{ mr: 1.5 }}>
          Feel free to contact me with any questions:
        </TypographyNoMargin>
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
