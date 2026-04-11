import { ChipProps, Chip } from "@mui/material";
import { memo } from "react";

interface TagProps extends ChipProps {
  text: string;
}

const Tag = memo(({ text, ...props }: TagProps) => {
  return <Chip label={text} {...props} />;
});

Tag.displayName = "Tag";

export default Tag;
