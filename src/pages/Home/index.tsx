import { Typography, Box, Button } from "@mui/material";
import TypographyWithDivider from "../../components/TypographyWithDivider";
import { Download } from "@mui/icons-material";

const HomePage = () => {
  return (
    <>
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
      <Box sx={{ mt: 3, display: "flex", gap: 2, flexWrap: "wrap" }}>
        <Button
          variant='contained'
          startIcon={<Download />}
          href='/resume.pdf'
          download='Vlad_Mosienko_Resume.pdf'
        >
          Download Resume
        </Button>
      </Box>
    </>
  );
};

export default HomePage;
