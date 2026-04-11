import { Divider, DividerProps } from "@mui/material";
import { memo } from "react";

const DashedDivider = memo(({ sx, ...props }: DividerProps) => {
  return <Divider sx={{ borderStyle: "dashed", ...sx }} {...props} />;
});

DashedDivider.displayName = "DashedDivider";

export default DashedDivider;
