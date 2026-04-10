import { Button, Stack, Box, Typography } from "@mui/material";
import TypographyWithDivider from "../../components/TypographyWithDivider";
import AppIcon from "../../components/AppIcon";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ContactsPage = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TypographyWithDivider variant='h1'>Get In Touch</TypographyWithDivider>
      <Typography sx={{ mb: 3 }}>
        I'm always open to discussing new opportunities, collaborations, or just connecting with
        fellow developers. Feel free to reach out through any of the channels below.
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant='h3' sx={{ mb: 2 }}>
          Contact Methods
        </Typography>
        <Stack spacing={2}>
          <Stack direction='row' spacing={2} alignItems='center'>
            <Button
              variant='outlined'
              size='large'
              LinkComponent='a'
              target='_blank'
              href='https://www.linkedin.com/in/vlad-mosienko-766910186/'
              startIcon={<AppIcon icon='linkedin' />}
              sx={{ minWidth: 150 }}
            >
              LinkedIn
            </Button>
            <Typography variant='body2' color='text.secondary'>
              {"-> Best for professional inquiries"}
            </Typography>
          </Stack>

          <Stack direction='row' spacing={2} alignItems='center'>
            <Button
              variant='outlined'
              size='large'
              LinkComponent='a'
              target='_blank'
              href='https://github.com/nfjdu'
              startIcon={<AppIcon icon='github' />}
              sx={{ minWidth: 150 }}
            >
              GitHub
            </Button>
            <Typography variant='body2' color='text.secondary'>
              {"-> Check out my open source work"}
            </Typography>
          </Stack>

          <Stack direction='row' spacing={2} alignItems='center'>
            <Button
              variant='outlined'
              size='large'
              LinkComponent='a'
              href='mailto:mosienko20133@gmail.com'
              startIcon={<AppIcon icon='email' />}
              sx={{ minWidth: 150 }}
            >
              Email
            </Button>
            <Typography variant='body2' color='text.secondary'>
              {"-> mosienko20133@gmail.com"}
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <Box>
        <Typography variant='h3' sx={{ mb: 2 }}>
          Location & Availability
        </Typography>
        <Typography>📍 Based in Ukraine</Typography>
        <Typography>🌍 Open to remote opportunities worldwide</Typography>
        <Typography>⏰ Timezone: EET (UTC+2/UTC+3)</Typography>
      </Box>
    </MotionBox>
  );
};

export default ContactsPage;
