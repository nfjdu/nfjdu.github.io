import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, IconButton, List } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavLink from "../../components/NavLink";
import NavLinksGroup from "../../components/NavLinksGroup";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import { useAppDispatch } from "../../store";
import { toggleTheme } from "../../store/settings/slice";

const RootPage = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflowX: "hidden",
        py: { xs: 10, sm: 12 },
        px: { xs: 3.6, sm: 14 },
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
    >
      <Box
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
          <MenuIcon />
        </IconButton>
        <IconButton
          sx={{
            mr: 0.3,
          }}
          LinkComponent={"a"}
          target='_blank'
          href='https://www.linkedin.com/in/vlad-mosienko-766910186/'
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton LinkComponent={"a"} target='_blank' href='https://github.com/nfjdu'>
          <GitHubIcon />
        </IconButton>
        <IconButton sx={{ ml: "auto" }} onClick={() => dispatch(toggleTheme())}>
          <Brightness6Icon />
        </IconButton>
      </Box>

      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: (theme) => theme.palette.background2.main,
          opacity: isMenuOpened ? 1 : 0,
          zIndex: isMenuOpened ? (theme) => theme.zIndex.drawer : -1,
          transition: "all 0.3s ease-in-out",
          transform: isMenuOpened ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <List sx={{ py: { xs: 12, sm: 12 }, px: { xs: 1.5, sm: 14 } }}>
          <NavLink to='/home' text='Home' onClick={() => setIsMenuOpened(false)} />
          <NavLinksGroup
            title='Style&shy;guide'
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
