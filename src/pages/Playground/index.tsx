import { Box, Typography, Card, CardContent, CardActionArea } from "@mui/material";
import TypographyWithDivider from "../../components/TypographyWithDivider";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const experiments = [
  {
    title: "Text Scramble Effect",
    description: "Animated text scrambling effect with custom characters",
    path: "/playground/text-scramble",
    category: "CSS/Animation",
  },
  {
    title: "Typewriter Effect",
    description: "Classic typewriter animation with cursor",
    path: "/playground/typewriter",
    category: "CSS/Animation",
  },
  {
    title: "Gradient Text Effect",
    description: "Animated gradient text with smooth transitions",
    path: "/playground/gradient-text",
    category: "CSS/Animation",
  },
  {
    title: "Glassmorphism Cube",
    description: "3D rotating cube with glassmorphism effect",
    path: "/playground/glassmorphism",
    category: "CSS/3D",
  },
  {
    title: "ASCII Art Generator",
    description: "Convert text into ASCII art characters",
    path: "/playground/ascii-art",
    category: "Canvas/2D",
  },
  {
    title: "iPhone 3D Model",
    description: "Interactive 3D model viewer with Three.js",
    path: "/playground/iphone-3d",
    category: "Three.js/3D",
  },
];

const PlaygroundPage = () => {
  const navigate = useNavigate();

  return (
    <MotionBox
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TypographyWithDivider variant='h1'>Playground</TypographyWithDivider>
      <Typography sx={{ mb: 4 }}>
        A collection of technical experiments and creative coding explorations. These demos showcase
        various web technologies, animations, and interactive effects I've built while learning and
        experimenting with different techniques.
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xxs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          gap: 3,
        }}
      >
        {experiments.map((experiment, idx) => (
          <MotionCard
            key={experiment.path}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            sx={{
              height: "100%",
              background: (theme) =>
                `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.action.hover} 100%)`,
              border: (theme) => `1px solid ${theme.palette.divider}`,
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: (theme) => theme.shadows[8],
              },
            }}
          >
            <CardActionArea
              onClick={() => navigate(experiment.path)}
              sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "stretch" }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant='caption'
                  sx={{
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    bgcolor: "action.selected",
                    display: "inline-block",
                    mb: 2,
                  }}
                >
                  {experiment.category}
                </Typography>
                <Typography variant='h4' gutterBottom>
                  {experiment.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {experiment.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </MotionCard>
        ))}
      </Box>
    </MotionBox>
  );
};

export default PlaygroundPage;
