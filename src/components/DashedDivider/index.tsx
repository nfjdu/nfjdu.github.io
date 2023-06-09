import { Divider, DividerProps } from "@mui/material";

interface Props extends DividerProps {
  sx?: DividerProps["sx"];
}

const DashedDivider = ({ sx }: Props) => {
  return <Divider sx={{ borderStyle: "dashed", ...sx }} />;
};

export default DashedDivider;
