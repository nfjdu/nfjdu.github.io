import { Typography, Box, Button, Stack, Chip } from "@mui/material";
import TypographyWithDivider from "../../components/TypographyWithDivider";
import { Download } from "@mui/icons-material";
import { motion } from "framer-motion";

const skills = {
  Frontend: ["React", "TypeScript", "Redux", "MUI", "Framer Motion", "Three.js", "Vite"],
  Backend: [".NET Core", "Node.js", "Express.js", "SignalR", "REST APIs"],
  Tools: ["Git", "Docker", "Webpack", "ESLint", "Prettier"],
  Other: ["WebRTC", "Real-time Communication", "Performance Optimization", "Architecture Design"],
};

const MotionBox = motion(Box);

const HomePage = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TypographyWithDivider variant='h1'>Hi there!</TypographyWithDivider>
      <Typography>
        I'm a Senior Full Stack Developer from Ukraine with 8+ years of commercial experience
        building scalable, high-performance web applications. I specialize in architecting frontend
        systems, leading technical initiatives, and delivering solutions that drive measurable
        business impact.
      </Typography>
      <Typography>
        My expertise centers on modern frontend development with React, TypeScript, and state
        management solutions, complemented by solid backend knowledge in .NET Core and Node.js. I've
        led architecture decisions for enterprise applications, mentored development teams, and
        consistently delivered projects that balance technical excellence with user experience.
      </Typography>
      <Typography>
        Throughout my career, I've worked on complex systems including fleet management platforms,
        real-time video communication tools, and internal enterprise applications. I focus on code
        quality, performance optimization, and building maintainable solutions that scale.
      </Typography>
      <Typography>
        I believe in pragmatic engineering—choosing the right tool for the job, writing clean and
        testable code, and fostering collaboration through clear communication and knowledge sharing.
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant='h2' sx={{ mb: 2 }}>
          Skills & Technologies
        </Typography>
        {Object.entries(skills).map(([category, items], idx) => (
          <MotionBox
            key={category}
            sx={{ mb: 2 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
          >
            <Typography variant='subtitle1' sx={{ mb: 1, fontWeight: 600 }}>
              {category}
            </Typography>
            <Stack direction='row' spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
              {items.map((skill) => (
                <Chip key={skill} label={skill} size='small' />
              ))}
            </Stack>
          </MotionBox>
        ))}
      </Box>

      <Box sx={{ mt: 3, display: "flex", gap: 2, flexWrap: "wrap" }}>
        <Button
          variant='contained'
          startIcon={<Download />}
          href='/resume.pdf'
          download='Vlad_Mosienko_Resume.pdf'
          component={motion.a}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume
        </Button>
      </Box>
    </MotionBox>
  );
};

export default HomePage;
