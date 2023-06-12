import {
  Collapse,
  ListItem,
  ListItemButton,
  ListItemProps,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface Props extends ListItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpened?: boolean;
  paddingMultiplier?: number;
}

const NavLinksGroup = ({
  title,
  children,
  defaultOpened = true,
  paddingMultiplier = 0,
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
              variant='h1'
              sx={{
                marginBlockStart: 0,
                marginBlockEnd: 0,
                marginInlineStart: 0,
                marginInlineEnd: 0,
              }}
            >
              {title}
            </Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>

      <Collapse in={isGroupExpanded}>{children}</Collapse>
    </>
  );
};

export default NavLinksGroup;
