import { Box, Typography, Chip, Stack } from "@mui/material";
import TypographyWithDivider from "../../components/TypographyWithDivider";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const skills = {
  "Languages & Core": {
    description: "Primary programming languages and runtime environments",
    items: ["JavaScript", "TypeScript", "Node.js", "C#/.NET"],
  },
  "Frontend Frameworks & Libraries": {
    description: "Modern frontend frameworks and data fetching solutions",
    items: ["React", "React Router", "React Query", "TanStack Query"],
  },
  "State Management": {
    description: "State management libraries for complex application state",
    items: ["Redux", "Redux Toolkit", "Jotai", "Zustand"],
  },
  "UI & Styling": {
    description: "UI component libraries, styling solutions, and design tools",
    items: [
      "Material UI",
      "Styled Components",
      "Tailwind CSS",
      "SASS",
      "SCSS",
      "CSS",
      "Figma",
    ],
  },
  "Testing & Quality": {
    description: "Testing frameworks and monitoring tools for code quality",
    items: ["Jest", "React Testing Library", "Storybook", "Sentry"],
  },
  "Backend & APIs": {
    description: "Backend frameworks and API technologies",
    items: ["Express.js", "REST API", "tRPC", "Axios"],
  },
  "Real-time Communication": {
    description: "Technologies for real-time data exchange and video communication",
    items: ["WebRTC", "WebSockets", "Socket.io", "SignalR"],
  },
  "Authentication & Security": {
    description: "Authentication and authorization solutions",
    items: ["Auth0"],
  },
  "Build Tools & Bundlers": {
    description: "Modern build tools and module bundlers",
    items: ["Vite", "Webpack"],
  },
  "DevOps & Infrastructure": {
    description: "Cloud platforms, containerization, and CI/CD pipelines",
    items: ["Azure", "Docker", "CI/CD", "Git"],
  },
  "Development Tools": {
    description: "Code editors and AI-powered development assistants",
    items: ["Neovim", "AI Agents"],
  },
  "Principles & Practices": {
    description: "Software design principles and best practices",
    items: ["OOP", "SOLID", "DRY", "KISS", "YAGNI"],
  },
};

const SkillsPage = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TypographyWithDivider variant='h1'>Skills & Technologies</TypographyWithDivider>
      <Typography sx={{ mb: 4 }}>
        Throughout my 7+ years of professional experience, I've worked with a wide range of
        technologies and tools. Here's a comprehensive overview of my technical skill set.
      </Typography>

      {Object.entries(skills).map(([category, { description, items }], idx) => (
        <MotionBox
          key={category}
          sx={{ mb: 3 }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: idx * 0.05 }}
        >
          <Typography variant='h3' sx={{ mb: 0.5 }}>
            {category}
          </Typography>
          <Typography variant='body2' color='text.secondary' sx={{ mb: 1.5 }}>
            {description}
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
