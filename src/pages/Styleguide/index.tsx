import { Link as RouterLink, Outlet, useLocation } from "react-router-dom";
import TypographyWithDivider from "../../components/TypographyWithDivider";
import { Stack, Typography } from "@mui/material";

interface StyleguideLinkProps {
  children: React.ReactNode;
  to: string;
}
const StyleguideLink = ({ to, children }: StyleguideLinkProps) => {
  const { pathname } = useLocation();

  return (
    <Typography
      component={RouterLink}
      to={to}
      sx={{
        fontWeight: pathname.includes(to) ? "bold" : "unset",
        color: (theme) => theme.palette.text.primary,
        "&:visited": { color: (theme) => theme.palette.text.primary },
      }}
    >
      {children}
    </Typography>
  );
};

const StyleguidePage = () => {
  return (
    <>
      <TypographyWithDivider variant='h1'>Style&shy;giude</TypographyWithDivider>
      <Stack direction={{ xs: "column", md: "row" }} sx={{ mt: 2 }} gap={2}>
        <Stack direction='column' sx={{ flex: "0 0 200px" }}>
          <StyleguideLink to='/dev/styleguide/buttons'>Buttons</StyleguideLink>
          <StyleguideLink to='/dev/styleguide/colors'>Colors</StyleguideLink>
          <StyleguideLink to='/dev/styleguide/dividers'>Dividers</StyleguideLink>
          <StyleguideLink to='/dev/styleguide/icons'>Icons</StyleguideLink>
          <StyleguideLink to='/dev/styleguide/tags'>Tags</StyleguideLink>
          <StyleguideLink to='/dev/styleguide/typography'>Typography</StyleguideLink>
        </Stack>
        <Stack direction='column' sx={{ flex: 1 }}>
          <Outlet />
        </Stack>
      </Stack>
    </>
  );
};

export default StyleguidePage;
