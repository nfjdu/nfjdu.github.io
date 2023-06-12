import { Typography, TypographyProps } from "@mui/material";
import DashedDivider from "../DashedDivider";

interface Props extends TypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}

const HeadingWithDivider = ({ variant = "h1", children, ...props }: Props) => {
  return (
    <>
      <Typography variant={variant} {...props}>
        {children}
      </Typography>
      <DashedDivider />
    </>
  );
};

export default HeadingWithDivider;
