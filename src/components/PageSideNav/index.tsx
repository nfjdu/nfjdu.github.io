import { Stack, StackProps, Typography } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

interface SideNavLinkProps {
  text: string;
  to: string;
}
const SideNavLink = ({ to, text }: SideNavLinkProps) => {
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
      {text}
    </Typography>
  );
};

interface Props {
  sx?: StackProps["sx"];
  links: SideNavLinkProps[];
}

const PageSideNav = ({ sx, links }: Props) => {
  return (
    <Stack direction='column' sx={{ flex: { xs: "0 0 auto", md: "0 0 200px" }, ...sx }}>
      {links.map((link, index) => (
        <SideNavLink key={index} to={link.to} text={link.text} />
      ))}
    </Stack>
  );
};

export default PageSideNav;
