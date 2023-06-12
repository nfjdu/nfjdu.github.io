import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, IconButton, List } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavLink from "../../components/NavLink";
import NavLinksGroup from "../../components/NavLinksGroup";

const RootPage = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflowX: "hidden",
        position: "relative",
        py: { xs: 5, md: 8 },
        px: { xs: 3, md: 14 },
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 10,
          left: 20,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
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

      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#dedede",
          opacity: isMenuOpened ? 1 : 0,
          zIndex: isMenuOpened ? (theme) => theme.zIndex.drawer : -1,
          transition: "all 0.3s ease-in-out",
          transform: isMenuOpened ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <List sx={{ py: { xs: 5, md: 8 }, px: { xs: 3, md: 14 } }}>
          <NavLink to='/home' text='Home' onClick={() => setIsMenuOpened(false)} />
          <NavLinksGroup
            title='Styleguide'
            children={[
              <NavLink
                typographyVariant='h2'
                paddingMultiplier={1}
                to='/styleguide/typography'
                text='Typography'
                onClick={() => setIsMenuOpened(false)}
              />,
              <NavLink
                paddingMultiplier={1}
                typographyVariant='h2'
                to='/styleguide/buttons'
                text='Buttons'
                onClick={() => setIsMenuOpened(false)}
              />,
            ]}
          />
        </List>
      </Box>

      <Outlet />
    </Box>
  );
};

export default RootPage;
