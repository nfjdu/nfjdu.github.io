import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Collapse, IconButton, List, ListItem, ListItemText, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const RootPage = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflowX: "hidden",
        position: "relative",
        p: 3,
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
    >
      <Box sx={{ position: "absolute", top: 10, left: 20 }}>
        <IconButton sx={{ mr: 2 }} onClick={() => setIsMenuOpened(!isMenuOpened)}>
          <MenuIcon />
        </IconButton>
        <IconButton>
          <LinkedInIcon />
        </IconButton>
        <IconButton>
          <GitHubIcon />
        </IconButton>
      </Box>

      {isMenuOpened && (
        <Box sx={{ backgroundColor: "grey" }}>
          <List>
            <ListItem>
              <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </List>
        </Box>
      )}

      <Outlet />
    </Box>
  );
};

export default RootPage;
