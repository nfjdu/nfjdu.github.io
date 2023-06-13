import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ThemeIcon from "@mui/icons-material/Brightness6";

const iconsMap = {
  menu: <MenuIcon />,
  linkedin: <LinkedInIcon />,
  github: <GitHubIcon />,
  theme: <ThemeIcon />,
};

interface Props {
  icon: keyof typeof iconsMap;
}

const AppIcon = ({ icon }: Props) => {
  const Icon = iconsMap[icon];
  return Icon;
};

export default AppIcon;
