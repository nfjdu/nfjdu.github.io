import { Divider, Typography, TypographyProps } from "@mui/material";
import { memo } from "react";

interface TypographyWithDividerProps extends TypographyProps {
  dividerVariant?: "solid" | "dashed";
}

const TypographyWithDivider = memo(
  ({ variant = "h1", dividerVariant = "dashed", children, sx, ...props }: TypographyWithDividerProps) => {
    return (
      <Typography
        variant={variant}
        sx={{ mb: 0, display: "flex", flexDirection: "column", ...sx }}
        {...props}
      >
        {children}
        <Divider
          sx={{
            borderBottomWidth: "0.08em",
            borderStyle: dividerVariant,
            mt: "0.1em",
            mb: "0.2em",
          }}
        />
      </Typography>
    );
  },
);

TypographyWithDivider.displayName = "TypographyWithDivider";

export default TypographyWithDivider;
