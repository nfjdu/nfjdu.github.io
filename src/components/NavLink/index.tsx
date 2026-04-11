import { ListItem, ListItemButton, ListItemProps, ListItemText, Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import { Link as RouterLink } from "react-router-dom";
import { memo } from "react";

interface NavLinkProps extends ListItemProps {
  to: string;
  text: string;
  typographyVariant?: Variant;
  paddingMultiplier?: number;
}

const NavLink = memo(
  ({ to, text, typographyVariant = "h1", paddingMultiplier = 0, ...props }: NavLinkProps) => {
    return (
      <ListItem disablePadding sx={{ pl: paddingMultiplier * 6 }} {...props}>
        <ListItemButton component={RouterLink} to={to}>
          <ListItemText disableTypography>
            <Typography
              variant={typographyVariant}
              sx={{
                marginBlockStart: 0,
                marginBlockEnd: 0,
                marginInlineStart: 0,
                marginInlineEnd: 0,
              }}
            >
              {text}
            </Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
    );
  },
);

NavLink.displayName = "NavLink";

export default NavLink;
