import { Typography } from "@mui/material";
import HeadingWithDivider from "../../components/HeadingWithDivider";
import DashedDivider from "../../components/DashedDivider";

const ProjectsPage = () => {
  return (
    <>
      <HeadingWithDivider variant='h1'>Projects</HeadingWithDivider>

      <Typography variant='h2'>Company internal management tool</Typography>
      <Typography variant='subtitle1'>2018-2019</Typography>
      <DashedDivider />
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
    </>
  );
};

export default ProjectsPage;
