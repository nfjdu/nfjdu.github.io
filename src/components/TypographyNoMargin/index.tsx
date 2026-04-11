import { Typography, TypographyProps } from "@mui/material";
import { memo } from "react";

const TypographyNoMargin = memo(({ children, sx, ...props }: TypographyProps) => {
  return (
    <Typography sx={{ m: 0, ...sx }} {...props}>
      {children}
    </Typography>
  );
});

TypographyNoMargin.displayName = "TypographyNoMargin";

export default TypographyNoMargin;
