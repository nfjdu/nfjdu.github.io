import { Box } from "@mui/material";
import { memo } from "react";

interface ProjectImageProps {
  src: string;
  alt: string;
}

const ProjectImage = memo(({ src, alt }: ProjectImageProps) => {
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
      component='img'
      src={src}
      onError={(e) => {
        e.currentTarget.src = "/no-image.png";
      }}
      alt={alt}
    />
  );
});

ProjectImage.displayName = "ProjectImage";

export default ProjectImage;
