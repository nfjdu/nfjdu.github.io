import {
  Collapse,
  ListItem,
  ListItemButton,
  ListItemProps,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AppIcon from "../AppIcon";

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