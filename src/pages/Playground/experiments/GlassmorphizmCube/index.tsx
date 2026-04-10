import { useState } from "react";
import { Box, keyframes } from "@mui/material";

const GlassmorphizmCube = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const size = 100;
  const expandAmount = isHovered ? 70 : 30;

  // Common glass style without boxShadow
  const sideCommonStyles = {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    borderRadius: "12px",
    backdropFilter: "blur(18px)",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    transition: "all 0.3s ease",
    overflow: "hidden",
  };

  const colors = [
    "rgba(25, 118, 210, 0.4)", // front - blue
    "rgba(211, 47, 47, 0.4)", // back - red
    "rgba(56, 142, 60, 0.4)", // right - green
    "rgba(245, 124, 0, 0.4)", // left - orange
    "rgba(123, 31, 162, 0.4)", // top - purple
    "rgba(251, 192, 45, 0.4)", // bottom - yellow
  ];
  const contents = ["⊂(◉‿◉)つ", "(ㆆ _ ㆆ)", "(✿◠‿◠)", "(⌐■_■)", "(｡◕‿‿◕｡)", "(͡ ° ͜ʖ ͡ °)"];
  const transforms = [
    `translateZ(${size / 2 + expandAmount}px)`,
    `rotateY(180deg) translateZ(${size / 2 + expandAmount}px)`,
    `rotateY(90deg) translateZ(${size / 2 + expandAmount}px)`,
    `rotateY(-90deg) translateZ(${size / 2 + expandAmount}px)`,
    `rotateX(90deg) translateZ(${size / 2 + expandAmount}px)`,
    `rotateX(-90deg) translateZ(${size / 2 + expandAmount}px)`,
  ];

  const spin = keyframes`
    from {
      transform: rotateX(-30deg) rotateY(0deg);
    }
    to {
      transform: rotateX(-30deg) rotateY(360deg);
    }
  `;

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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Shadow wrapper */}
      <Box
        sx={{
          width: "160px",
          height: "160px",
          perspective: "1000px",
          // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          filter: "drop-shadow(0 4px 30px rgba(0, 0, 0, 0.1))",
        }}
      >
        {/* Rotating cube */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
            animation: `${spin} 10s linear infinite`,
          }}
        >
          {contents.map((content, index) => {
            return (
              <Box
                sx={{
                  ...sideCommonStyles,
                  background: colors[index],
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
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default GlassmorphizmCube;
