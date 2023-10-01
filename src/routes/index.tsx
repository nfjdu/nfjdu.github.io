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
import ExamplesPage from "../pages/Examples";
import RESTPage from "../pages/Examples/REST";
import BrowserAPIsPage from "../pages/Examples/BrowserAPIs";
import GraphicsPage from "../pages/Examples/Graphics";
import GraphicsOtherPage from "../pages/Examples/Graphics/Other";
import GraphicsModelsPage from "../pages/Examples/Graphics/Models";

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
          { index: true, element: <Navigate to='/dev/styleguide' /> },
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
            path: "examples",
            element: <ExamplesPage />,
            children: [
              { index: true, element: <Navigate to='/dev/examples/rest' /> },
              { path: "rest", element: <RESTPage /> },
              { path: "browser", element: <BrowserAPIsPage /> },
              {
                path: "graphics",
                element: <GraphicsPage />,
                children: [
                  { index: true, element: <Navigate to='/dev/examples/graphics/models' /> },
                  { path: "models", element: <GraphicsModelsPage /> },
                  { path: "other", element: <GraphicsOtherPage /> },
                ],
              },
            ],
          },
        ],
      },
      { path: "contacts", element: <ContactsPage /> },
    ],
  },
];
