import { Box } from "@mui/material";

interface Props {
  src: string;
  alt: string;
}

const ProjectImage = ({ src, alt }: Props) => {
  return (
    <Box
      sx={{ mt: 3, width: { xs: "100%", lg: "50%" }, height: "auto" }}
      component={"img"}
      src={src}
      alt={alt}
      height={400}
    />
  );
};

export default ProjectImage;
