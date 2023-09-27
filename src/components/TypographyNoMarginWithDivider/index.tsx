import { Divider, TypographyProps } from "@mui/material";
import TypographyNoMargin from "../TypographyNoMargin";

interface Props extends TypographyProps {
  variant?: TypographyProps["variant"];
  dividerVariant?: "solid" | "dashed";
  children: React.ReactNode;
}

const TypographyNoMarginWithDivider = ({
  variant = "h1",
  dividerVariant = "dashed",
  children,
  ...props
}: Props) => {
  return (
    <TypographyNoMargin
      variant={variant}
      {...props}
      sx={{ display: "flex", flexDirection: "column", ...props.sx }}
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
};

export default TypographyNoMarginWithDivider;
