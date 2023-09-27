import { Divider, Typography, TypographyProps } from "@mui/material";

interface Props extends TypographyProps {
  variant?: TypographyProps["variant"];
  dividerVariant?: "solid" | "dashed";
  children: React.ReactNode;
}

const TypographyWithDivider = ({
  variant = "h1",
  dividerVariant = "dashed",
  children,
  ...props
}: Props) => {
  return (
    <Typography
      variant={variant}
      {...props}
      sx={{ mb: 0, display: "flex", flexDirection: "column", ...props.sx }}
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
};

export default TypographyWithDivider;
