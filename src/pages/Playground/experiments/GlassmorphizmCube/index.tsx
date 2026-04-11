import { useState } from "react";
import { Box, keyframes } from "@mui/material";
import {
  CUBE_SIZE,
  EXPAND_AMOUNT_DEFAULT,
  EXPAND_AMOUNT_HOVERED,
  SIDE_COLORS,
  SIDE_CONTENTS,
  getSideTransforms,
  SIDE_COMMON_STYLES,
} from "./constants";

const spin = keyframes`
  from {
    transform: rotateX(-30deg) rotateY(0deg);
  }
  to {
    transform: rotateX(-30deg) rotateY(360deg);
  }
`;

const GlassmorphizmCube = () => {
  const [isHovered, setIsHovered] = useState(false);
  const expandAmount = isHovered ? EXPAND_AMOUNT_HOVERED : EXPAND_AMOUNT_DEFAULT;
  const transforms = getSideTransforms(CUBE_SIZE, expandAmount);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        padding: "24px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        sx={{
          width: "160px",
          height: "160px",
          perspective: "1000px",
          filter: "drop-shadow(0 4px 30px rgba(0, 0, 0, 0.1))",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
            animation: `${spin} 10s linear infinite`,
          }}
        >
          {SIDE_CONTENTS.map((content, index) => (
            <Box
              key={index}
              sx={{
                ...SIDE_COMMON_STYLES,
                background: SIDE_COLORS[index],
                transform: transforms[index],
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {content}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default GlassmorphizmCube;
