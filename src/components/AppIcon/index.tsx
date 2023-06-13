import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ThemeIcon from "@mui/icons-material/Brightness6";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { SvgIconProps } from "@mui/material";

const iconsMap = {
  menu: MenuIcon,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  theme: ThemeIcon,
  "expand-less": ExpandLess,
  "expand-more": ExpandMore,
};

interface Props extends SvgIconProps {
  icon: keyof typeof iconsMap;
}

const AppIcon = ({ icon, ...props }: Props) => {
  const Icon = iconsMap[icon];
  return <Icon {...props} />;
};

export default AppIcon;
