import { Box, Typography, Stack, Card, CardContent, CardActionArea } from "@mui/material";
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

      <Stack spacing={2}>
        {experiments.map((experiment, idx) => (
          <MotionCard
            key={experiment.path}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            sx={{ maxWidth: 600 }}
          >
            <CardActionArea onClick={() => navigate(experiment.path)}>
              <CardContent>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                  <Box>
                    <Typography variant='h4' gutterBottom>
                      {experiment.title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {experiment.description}
                    </Typography>
                  </Box>
                  <Typography
                    variant='caption'
                    sx={{
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1,
                      bgcolor: "action.hover",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {experiment.category}
                  </Typography>
                </Stack>
              </CardContent>
            </CardActionArea>
          </MotionCard>
        ))}
      </Stack>
    </MotionBox>
  );
};

export default PlaygroundPage;
