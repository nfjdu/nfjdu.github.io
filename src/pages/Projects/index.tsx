import { Link, Typography } from "@mui/material";
import HeadingWithDivider from "../../components/HeadingWithDivider";
import DashedDivider from "../../components/DashedDivider";
import ProjectImage from "../../components/ProjectImage";
import TypographyNoMargin from "../../components/TypographyNoMargin";

const ProjectsPage = () => {
  return (
    <>
      <HeadingWithDivider variant='h1'>Projects</HeadingWithDivider>

      <Typography variant='h2'>NexusFleet</Typography>
      <TypographyNoMargin variant='subtitle1'>2022-2023</TypographyNoMargin>
      <DashedDivider sx={{ mb: 1 }} />
      <Typography>
        Details coming soon... Breafly: My key tasks were designing a part of frontend core
        architecture, implementing a comprehensive style guide, and creating some(tons, omg) views
        and forms. To accomplish these objectives, technologies like React, MUI React (Material-UI),
        Formik, Redux, and SignalR were used. By using these tools, I ensured a robust and efficient
        end user experience.
      </Typography>

      <Typography variant='h2'>ALD Automotive</Typography>
      <TypographyNoMargin variant='subtitle1'>2021-2022</TypographyNoMargin>
      <DashedDivider sx={{ mb: 1 }} />
      <Typography>
        Another project I worked on is an internal tool for{" "}
        <Link target='_blank' href='https://www.aldautomotive.com/'>
          ALD Automotive
        </Link>
        . It is difficult to explain what my specific tasks were, as I cannot disclose details about
        the tool's purpose due to its private nature, but in general my key tasks were designing the
        frontend core architecture, developing a comprehensive style guide, and creating views and
        forms to provide clear user interaction.
      </Typography>
      <Typography>
        To accomplish these tasks, I leveraged a range of cutting-edge technologies. React served as
        the foundation of the frontend development, providing a robust and efficient library. I
        utilized Material-UI to ensure a visually appealing and cohesive user interface.
        Additionally, Redux and Redux Toolkit empowered me to manage state effectively and RTK Query
        and SignalR, to facilitate seamless data fetching, synchronization, and real-time
        communication. These technologies allowed for dynamic and collaborative experiences,
        enhancing the overall usability and productivity of the application.
      </Typography>
      <ProjectImage src='/ald-screenshot.png' alt='ALD Automotive' />
      <Typography variant='caption' sx={{ textAlign: "center" }}>
        Picture 1. Very informative screenshot of ALD Automotive internal tool application =)
      </Typography>

      <Typography variant='h2'>Seequre</Typography>
      <TypographyNoMargin variant='subtitle1'>2019-2021</TypographyNoMargin>
      <DashedDivider sx={{ mb: 1 }} />
      <Typography>
        I had the privilege of working on an exciting project involving the development of a video
        communication system, named{" "}
        <Link target='_blank' href='https://www.seequre.no/'>
          Seequre
        </Link>
        . My key tasks revolved around improving, and bug fixing the video calls feature to ensure
        seamless and high-quality communication between users.
      </Typography>
      <Typography>
        Additionally, I was responsible for the implementation of the chatting feature, enabling
        users to exchange messages and stay connected beyond video calls. This feature provided a
        convenient way for users to communicate and share information in real-time.
      </Typography>
      <Typography>
        Another significant aspect of the project was the implementation of a meetings calendar
        feature. This functionality allowed users to schedule and manage their video meetings
        efficiently. By integrating a user-friendly calendar interface, users could effortlessly
        organize their video communication sessions.
      </Typography>
      <Typography>
        Throughout the project, I also contributed to various UI aspects, including the development
        of forms, views, and common components. By focusing on the user experience and visual
        appeal, an intuitive and visually appealing interface that enhanced usability and engagement
        were created.
      </Typography>
      <ProjectImage
        src='https://www.seequre.no/wp-content/uploads/2022/07/chrome_l3TfPj8lc3.png'
        alt='Seequre'
      />
      <Typography variant='caption' sx={{ textAlign: "center" }}>
        Picture 1. Screenshot of Seequre №1
      </Typography>
      <ProjectImage src='/seequre-screenshot.png' alt='Seequre' />
      <Typography variant='caption' sx={{ textAlign: "center" }}>
        Picture 2. Screenshot of Seequre №2
      </Typography>

      <Typography variant='h2'>Company internal management tool</Typography>
      <Typography variant='subtitle1'>2018-2019</Typography>
      <DashedDivider sx={{ mb: 1 }} />
      <Typography>
        I was involved in the development of an internal system for a company, focusing on project
        documentation, estimates, and plans. This platform streamlined project management processes,
        centralizing crucial information for efficient collaboration. It provided intuitive
        interfaces for creating, updating, and accessing project documents. The system also
        facilitated accurate estimation, resource allocation, and real-time visibility into project
        timelines. Within this project, my primary responsibilities included developing features
        such as a markdown editor, an estimates table, and some backend CRUD operations. The
        estimates table feature played a crucial role in project planning and resource allocation. I
        implemented a dynamic table that enabled project stakeholders to enter, modify, and review
        estimates for various project tasks. This functionality provided a clear overview of
        resource requirements and helped teams make informed decisions based on accurate estimates.
      </Typography>

      <DashedDivider sx={{ my: 3 }} />

      <Typography variant='caption'>
        This is just a small glimpse into the comercial projects I have worked on during my
        programming career. There are numerous other projects that I have developed both during my
        time in university and for personal endeavors.
      </Typography>
    </>
  );
};

export default ProjectsPage;
