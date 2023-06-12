import { Typography } from "@mui/material";
import DashedDivider from "../DashedDivider";

interface Props {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}

const HeadingWithDivider = ({ variant = "h1", children }: Props) => {
  return (
    <>
      <Typography variant={variant}>{children}</Typography>
      <DashedDivider />
    </>
  );
};

export default HeadingWithDivider;
