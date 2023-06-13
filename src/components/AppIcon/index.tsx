import { iconsMap } from "../../constants/icons";

interface Props {
  icon: keyof typeof iconsMap;
}

const AppIcon = ({ icon }: Props) => {
  const Icon = iconsMap[icon];
  return Icon;
};

export default AppIcon;
