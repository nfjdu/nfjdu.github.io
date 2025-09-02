import { Navigate, RouteObject } from "react-router-dom";
import ErrorPage from "../pages/Error";
import HomePage from "../pages/Home";
import RootPage from "../pages/Root";
import StyleguidePage from "../pages/Styleguide";
import ButtonsPage from "../pages/Styleguide/Buttons";
import ColorsPage from "../pages/Styleguide/Colors";
import IconsPage from "../pages/Styleguide/Icons";
import TypographyPage from "../pages/Styleguide/Typography";
import DividersPage from "../pages/Styleguide/Dividers";
import TagsPage from "../pages/Styleguide/Tags";
import DevPage from "../pages/Dev/Dev";
import ExamplesPage from "../pages/Examples";
import $3DPage from "../pages/Examples/3D";
import $2DPage from "../pages/Examples/2D";
import CssPage from "../pages/Examples/CSS";
import ProjectsPage from "../pages/Projects";
import ContactsPage from "../pages/Contacts";

import DevOnly from "../components/DevOnlyRoute";
import RESTPage from "../pages/Examples/REST";
import BrowserAPIsPage from "../pages/Examples/BrowserAPIs";

export const routes: RouteObject[] = [
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
          { index: true, element: <Navigate to='/dev/examples' /> },
          {
            path: "styleguide",
            element: <DevOnly element={<StyleguidePage />} />,
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
              { index: true, element: <Navigate to='/dev/examples/2d' /> },
              { path: "rest", element: <DevOnly element={<RESTPage />} /> },
              { path: "browser", element: <DevOnly element={<BrowserAPIsPage />} /> },
              {
                path: "css",
                element: <CssPage />,
              },
              {
                path: "2d",
                element: <$2DPage />,
              },
              {
                path: "3d",
                element: <$3DPage />,
              },
            ],
          },
        ],
      },
      { path: "contacts", element: <ContactsPage /> },
    ],
  },
];
