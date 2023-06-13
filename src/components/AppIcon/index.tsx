import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ThemeIcon from "@mui/icons-material/Brightness6";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmailIcon from "@mui/icons-material/Email";
import { SvgIconProps } from "@mui/material";

const iconsMap = {
  menu: MenuIcon,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  theme: ThemeIcon,
  email: EmailIcon,
  "expand-less": ExpandLessIcon,
  "expand-more": ExpandMoreIcon,
};

interface Props extends SvgIconProps {
  icon: keyof typeof iconsMap;
}

const AppIcon = ({ icon, ...props }: Props) => {
  const Icon = iconsMap[icon];
  return <Icon {...props} />;
};

export default AppIcon;
