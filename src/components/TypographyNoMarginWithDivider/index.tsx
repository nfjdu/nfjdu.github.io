import { Divider, TypographyProps } from "@mui/material";
import TypographyNoMargin from "../TypographyNoMargin";
import { memo } from "react";

interface TypographyNoMarginWithDividerProps extends TypographyProps {
  dividerVariant?: "solid" | "dashed";
}

const TypographyNoMarginWithDivider = memo(
  ({ variant = "h1", dividerVariant = "dashed", children, sx, ...props }: TypographyNoMarginWithDividerProps) => {
    return (
      <TypographyNoMargin
        variant={variant}
        sx={{ display: "flex", flexDirection: "column", ...sx }}
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
      </TypographyNoMargin>
    );
  },
);

TypographyNoMarginWithDivider.displayName = "TypographyNoMarginWithDivider";

export default TypographyNoMarginWithDivider;
