import { Link as RouterLink, Outlet, useLocation } from "react-router-dom";
import TypographyWithDivider from "../../../components/TypographyWithDivider";
import { Alert, Stack, Typography } from "@mui/material";

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
const GraphicsPage = () => {
  return (
    <>
      <TypographyWithDivider variant='h2'>Graphics</TypographyWithDivider>

      <Alert variant='outlined' severity='info'>
        Work in progress...
      </Alert>

      <Stack direction={{ xs: "column", md: "row" }} sx={{ mt: 2 }} gap={2}>
        <Stack direction='column' sx={{ flex: { xs: "0 0 auto", md: "0 0 200px" } }}>
          <StyleguideLink to='/dev/examples/graphics/models'>Models</StyleguideLink>
          <StyleguideLink to='/dev/examples/graphics/other'>Other</StyleguideLink>
        </Stack>
        <Stack direction='column' sx={{ flex: 1 }}>
          <Outlet />
        </Stack>
      </Stack>
    </>
  );
};

export default GraphicsPage;
