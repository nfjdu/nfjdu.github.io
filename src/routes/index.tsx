import { Navigate } from "react-router-dom";
import ErrorPage from "../pages/Error";
import HomePage from "../pages/Home";
import RootPage from "../pages/Root";
import StyleguidePage from "../pages/Styleguide";
import ButtonsPage from "../pages/Styleguide/Buttons";
import ColorsPage from "../pages/Styleguide/Colors";
import IconsPage from "../pages/Styleguide/Icons";
import TypographyPage from "../pages/Styleguide/Typography";
import ProjectsPage from "../pages/Projects";
import ContactsPage from "../pages/Contacts";
import DividersPage from "../pages/Styleguide/Dividers";
import TagsPage from "../pages/Styleguide/Tags";
import DevPage from "../pages/Dev/Dev";
import ApiPage from "../pages/Api";
import RESTPage from "../pages/Api/REST";

export const routes = [
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to='/home' /> },
      { path: "home", element: <HomePage /> },
      { path: "projects", element: <ProjectsPage /> },
      {
        path: "dev",
        element: <DevPage />,
        children: [
          {
            path: "styleguide",
            element: <StyleguidePage />,
            children: [
              { index: true, element: <Navigate to='/dev/styleguide/buttons' /> },
              { path: "buttons", element: <ButtonsPage /> },
              { path: "colors", element: <ColorsPage /> },
              { path: "dividers", element: <DividersPage /> },
              { path: "icons", element: <IconsPage /> },
              { path: "tags", element: <TagsPage /> },
              { path: "typography", element: <TypographyPage /> },
            ],
          },
          {
            path: "api",
            element: <ApiPage />,
            children: [
              { index: true, element: <Navigate to='/dev/api/rest' /> },
              { path: "rest", element: <RESTPage /> },
            ],
          },
        ],
      },
      { path: "contacts", element: <ContactsPage /> },
    ],
  },
];
