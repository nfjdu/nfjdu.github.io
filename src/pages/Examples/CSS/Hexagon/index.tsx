import { useState } from "react";
import { Box, keyframes, Paper } from "@mui/material";

const GlassmorphizmCube = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Cube dimensions
  const size = 100;
  const expandAmount = isHovered ? 70 : 30;

  // Glassmorphism base style
  const glassStyle = {
    background: "rgba(255, 255, 255, 0.25)",
    backdropFilter: "blur(8px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
  };

  // Slight color tints for each face
  const colors = [
    "rgba(25, 118, 210, 0.4)", // front - blue tint
    "rgba(211, 47, 47, 0.4)", // right - red tint
    "rgba(56, 142, 60, 0.4)", // back - green tint
    "rgba(245, 124, 0, 0.4)", // left - orange tint
    "rgba(123, 31, 162, 0.4)", // top - purple tint
    "rgba(251, 192, 45, 0.4)", // bottom - yellow tint
  ];

  // Create rotation animation
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
        borderRadius: "16px",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box
        sx={{
          position: "relative",
          width: "160px",
          height: "160px",
          transformStyle: "preserve-3d",
          animation: `${spin} 10s linear infinite`,
        }}
      >
        {/* Front face */}
        <Paper
          elevation={0}
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "12px",
            color: "white",
            fontWeight: "bold",
            ...glassStyle,
            background: colors[0],
            transform: `translateZ(${size / 2 + expandAmount}px)`,
            transition: "all 0.3s ease",
          }}
        >
          Front
        </Paper>

        {/* Back face */}
        <Paper
          elevation={0}
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "12px",
            color: "white",
            fontWeight: "bold",
            ...glassStyle,
            background: colors[2],
            transform: `rotateY(180deg) translateZ(${size / 2 + expandAmount}px)`,
            transition: "all 0.3s ease",
          }}
        >
          Back
        </Paper>

        {/* Right face */}
        <Paper
          elevation={0}
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "12px",
            color: "white",
            fontWeight: "bold",
            ...glassStyle,
            background: colors[1],
            transform: `rotateY(90deg) translateZ(${size / 2 + expandAmount}px)`,
            transition: "all 0.3s ease",
          }}
        >
          Right
        </Paper>

        {/* Left face */}
        <Paper
          elevation={0}
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "12px",
            color: "white",
            fontWeight: "bold",
            ...glassStyle,
            background: colors[3],
            transform: `rotateY(-90deg) translateZ(${size / 2 + expandAmount}px)`,
            transition: "all 0.3s ease",
          }}
        >
          Left
        </Paper>

        {/* Top face */}
        <Paper
          elevation={0}
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "12px",
            color: "white",
            fontWeight: "bold",
            ...glassStyle,
            background: colors[4],
            transform: `rotateX(90deg) translateZ(${size / 2 + expandAmount}px)`,
            transition: "all 0.3s ease",
          }}
        >
          Top
        </Paper>

        {/* Bottom face */}
        <Paper
          elevation={0}
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "12px",
            color: "white",
            fontWeight: "bold",
            ...glassStyle,
            background: colors[5],
            transform: `rotateX(-90deg) translateZ(${size / 2 + expandAmount}px)`,
            transition: "all 0.3s ease",
          }}
        >
          Bottom
        </Paper>
      </Box>
    </Box>
  );
};

export default GlassmorphizmCube;
