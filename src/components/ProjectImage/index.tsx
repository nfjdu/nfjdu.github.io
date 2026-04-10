import { Box } from "@mui/material";

interface Props {
  src: string;
  alt: string;
}

const ProjectImage = ({ src, alt }: Props) => {
  return (
    <Box
      sx={{
        mt: 3,
        ml: "auto",
        mr: "auto",
        width: { xxs: "100%", lg: "70%" },
        height: "auto",
        display: "block",
      }}
      component={"img"}
      src={src}
      onError={(e) => {
        e.currentTarget.src = "/no-image.png";
      }}
      alt={alt}
    />
  );
};

export default ProjectImage;
