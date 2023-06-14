import { Typography, TypographyProps } from "@mui/material";

interface Props extends TypographyProps {
  children: React.ReactNode;
  sx?: TypographyProps["sx"];
}

const TypographyNoMargin = ({ children, sx, ...props }: Props) => {
  return (
    <Typography sx={{ m: 0, ...sx }} {...props}>
      {children}
    </Typography>
  );
};

export default TypographyNoMargin;
