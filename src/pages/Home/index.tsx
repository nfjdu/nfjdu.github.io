import { Typography } from "@mui/material";
import HeadingWithDivider from "../../components/HeadingWithDivider";

const HomePage = () => {
  return (
    <>
      <HeadingWithDivider variant='h1'>Hi there!</HeadingWithDivider>
      <Typography>
        Welcome to my professional portfolio website, dedicated to showcasing my skills and
        expertise as a Middle Frontend(React) Developer from Ukraine. I bring four years of valuable
        commercial experience, honing my skills and delivering successful projects in the
        ever-evolving tech industry.
      </Typography>
      <Typography>
        Additionally, I possess a sufficient understanding of .NET Core and Express.js, allowing me
        to leverage their power in developing robust web applications. Inspired by the elegance of
        minimalism, I strive to create digital experiences that are both visually captivating and
        functionally seamless. In this portfolio, you'll find a curated collection of my most
        notable projects. By leveraging the latest tools and frameworks, I strive to deliver
        innovative and cutting-edge solutions that drive your business forward.
      </Typography>
      <Typography>
        Collaboration is at the heart of my work philosophy. I firmly believe that the best results
        are achieved through open communication, teamwork, and a shared passion for innovation.
      </Typography>
      <Typography>
        Thank you for visiting my portfolio website. If you're interested in collaborating, have a
        project in mind, or simply want to connect, don't hesitate to reach out.
      </Typography>
      <Typography variant='caption'>
        P.S. Of course this text wasn't written by ChatGPT
        <br />
        P.S.2. But there is no assurance =)
      </Typography>
    </>
  );
};

export default HomePage;
