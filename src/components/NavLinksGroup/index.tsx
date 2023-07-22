import {
  Collapse,
  ListItem,
  ListItemButton,
  ListItemProps,
  ListItemText,
  Typography,
} from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import { useState } from "react";
import AppIcon from "../AppIcon";

interface Props extends ListItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpened?: boolean;
  paddingMultiplier?: number;
  typographyVariant?: Variant;
}

const NavLinksGroup = ({
  title,
  children,
  defaultOpened = false,
  paddingMultiplier = 0,
  typographyVariant = "h1",
  ...props
}: Props) => {
  const [isGroupExpanded, setIsGroupExpanded] = useState(defaultOpened);

  return (
    <>
      <ListItem
        disablePadding
        sx={{ pl: paddingMultiplier * 6 }}
        onClick={() => setIsGroupExpanded(!isGroupExpanded)}
        {...props}
      >
        <ListItemButton>
          <ListItemText disableTypography>
            <Typography
              variant={typographyVariant}
              sx={{
                display: "flex",
                alignItems: "center",
                marginBlockStart: 0,
                marginBlockEnd: 0,
                marginInlineStart: 0,
                marginInlineEnd: 0,
              }}
            >
              {title}
              <AppIcon
                icon={isGroupExpanded ? "expand-less" : "expand-more"}
                fontSize='large'
                sx={{ ml: "auto" }}
              />
            </Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>

      <Collapse in={isGroupExpanded}>{children}</Collapse>
    </>
  );
};

export default NavLinksGroup;
