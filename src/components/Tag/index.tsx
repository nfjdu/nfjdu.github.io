import { ChipProps, Chip } from "@mui/material";

interface Props extends ChipProps {
  text: string;
}

const Tag = ({ text }: Props) => {
  return <Chip label={text} />;
};

export default Tag;
