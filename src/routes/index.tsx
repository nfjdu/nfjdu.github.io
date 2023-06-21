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
        path: "styleguide",
        element: <StyleguidePage />,
        children: [
          { path: "buttons", element: <ButtonsPage /> },
          { path: "colors", element: <ColorsPage /> },
          { path: "dividers", element: <DividersPage /> },
          { path: "icons", element: <IconsPage /> },
          { path: "tags", element: <TagsPage /> },
          { path: "typography", element: <TypographyPage /> },
        ],
      },
      { path: "contacts", element: <ContactsPage /> },
    ],
  },
];
