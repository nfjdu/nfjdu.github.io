import { Box, Typography, Chip, Stack } from "@mui/material";
import TypographyWithDivider from "../../components/TypographyWithDivider";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const skills = {
  "Languages & Core": ["JavaScript", "TypeScript", "Node.js", ".NET"],
  "Frontend Frameworks & Libraries": ["React", "React Router", "React Query", "TanStack Query"],
  "State Management": ["Redux", "Redux Toolkit", "Jotai", "Zustand"],
  "UI & Styling": ["Material UI", "Styled Components", "Tailwind CSS", "SASS", "SCSS", "Figma"],
  "Testing & Quality": ["Jest", "React Testing Library", "Storybook", "Sentry"],
  "Backend & APIs": ["Express.js", "REST API", "tRPC", "Axios"],
  "Real-time Communication": ["WebRTC", "WebSockets", "Socket.io", "SignalR"],
  "Build Tools & Bundlers": ["Vite", "Webpack"],
  "DevOps & Infrastructure": ["Azure", "Docker", "CI/CD", "Git"],
  "Development Tools": ["neovim", "AI Agents", "Cursor", "Claude"],
  "Authentication & Security": ["Auth0"],
  "Principles & Practices": ["OOP", "SOLID", "DRY", "KISS", "YAGNI"],
};

const SkillsPage = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TypographyWithDivider variant='h1'>Skills & Technologies</TypographyWithDivider>
      <Typography sx={{ mb: 4 }}>
        Throughout my 7+ years of professional experience, I've worked with a wide range of
        technologies and tools. Here's a comprehensive overview of my technical skill set.
      </Typography>

      {Object.entries(skills).map(([category, items], idx) => (
        <MotionBox
          key={category}
          sx={{ mb: 3 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: idx * 0.05 }}
        >
          <Typography variant='h3' sx={{ mb: 1.5 }}>
            {category}
          </Typography>
          <Stack direction='row' sx={{ flexWrap: "wrap", gap: 1 }}>
            {items.map((skill) => (
              <Chip key={skill} label={skill} variant='outlined' />
            ))}
          </Stack>
        </MotionBox>
      ))}
    </MotionBox>
  );
};

export default SkillsPage;
