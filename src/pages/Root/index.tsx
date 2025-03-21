import { Box, IconButton, List } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NavLink from "../../components/NavLink";
import NavLinksGroup from "../../components/NavLinksGroup";
import { useAppDispatch } from "../../store";
import { toggleTheme } from "../../store/settings/slice";
import AppIcon from "../../components/AppIcon";
import WalkingDude from "../../components/WalkingDude";

const RootPage = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // trick to fix github SPA routing problem
  useEffect(() => {
    const path = localStorage.getItem("path");
    if (path) {
      localStorage.removeItem("path");
      navigate(path);
    }
  }, []);

  return (
    <Box
      component='div'
      sx={{
        width: "100%",
        height: "100%",
        overflowX: "hidden",
        position: "relative",
        py: { xxs: 10, sm: 12, xl: 16 },
        px: { xxs: 3.6, sm: 14, xl: 18 },
        backgroundColor: (theme) => theme.palette.background.paper,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <WalkingDude />
      <Box
        component='div'
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          p: 3.6,
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: "100%",
          display: "flex",
        }}
      >
        <IconButton
          sx={{
            mr: 3.3,
          }}
          onClick={() => setIsMenuOpened(!isMenuOpened)}
        >
          <AppIcon icon='menu' />
        </IconButton>
        <IconButton
          sx={{
            mr: 0.3,
          }}
          LinkComponent={"a"}
          target='_blank'
          href='https://www.linkedin.com/in/vlad-mosienko-766910186/'
        >
          <AppIcon icon='linkedin' />
        </IconButton>
        <IconButton LinkComponent={"a"} target='_blank' href='https://github.com/nfjdu'>
          <AppIcon icon='github' />
        </IconButton>
        <IconButton sx={{ ml: "auto" }} onClick={() => dispatch(toggleTheme())}>
          <AppIcon icon='theme' />
        </IconButton>
      </Box>

      <Box
        component='div'
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: (theme) => theme.palette.menuBackground.main,
          opacity: isMenuOpened ? 1 : 0,
          zIndex: isMenuOpened ? (theme) => theme.zIndex.drawer : -1,
          transition: "all 0.3s ease-in-out",
          transform: isMenuOpened ? "translateX(0)" : "translateX(-100%)",
          overflowX: "hidden",
        }}
      >
        <List sx={{ py: { xxs: 12, sm: 14, xl: 18 }, px: { xxs: 1.5, sm: 14, xl: 18 } }}>
          <NavLink to='/home' text='Home' onClick={() => setIsMenuOpened(false)} />
          <NavLink to='/projects' text='Projects' onClick={() => setIsMenuOpened(false)} />
          <NavLinksGroup title='Dev'>
            <NavLink
              to='/dev/styleguide'
              text='Style&shy;guide'
              onClick={() => setIsMenuOpened(false)}
              typographyVariant='h2'
              paddingMultiplier={1}
            />
            <NavLinksGroup title='Examples' typographyVariant='h2' paddingMultiplier={1}>
              {/*<NavLink
                typographyVariant='h3'
                paddingMultiplier={2}
                to='/dev/examples/rest'
                text='REST'
                onClick={() => setIsMenuOpened(false)}
              />
              <NavLink
                typographyVariant='h3'
                paddingMultiplier={2}
                to='/dev/examples/browser'
                text='Browser APIs'
                onClick={() => setIsMenuOpened(false)}
              />*/}
              <NavLink
                typographyVariant='h3'
                paddingMultiplier={2}
                to='/dev/examples/css'
                text='CSS'
                onClick={() => setIsMenuOpened(false)}
              />
              <NavLink
                typographyVariant='h3'
                paddingMultiplier={2}
                to='/dev/examples/2d'
                text='2D'
                onClick={() => setIsMenuOpened(false)}
              />
              <NavLink
                typographyVariant='h3'
                paddingMultiplier={2}
                to='/dev/examples/3d'
                text='3D'
                onClick={() => setIsMenuOpened(false)}
              />
            </NavLinksGroup>
          </NavLinksGroup>

          <NavLink to='/contacts' text='Contacts' onClick={() => setIsMenuOpened(false)} />
        </List>
      </Box>

      <Outlet />
    </Box>
  );
};

export default RootPage;
