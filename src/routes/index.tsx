import { Navigate, RouteObject } from "react-router-dom";
import { lazy, Suspense } from "react";
import ErrorPage from "../pages/Error";
import RootPage from "../pages/Root";
import DevOnly from "../components/DevOnlyRoute";

// Lazy load pages
const HomePage = lazy(() => import("../pages/Home"));
const SkillsPage = lazy(() => import("../pages/Skills"));
const ProjectsPage = lazy(() => import("../pages/Projects"));
const ContactsPage = lazy(() => import("../pages/Contacts"));
const StyleguidePage = lazy(() => import("../pages/Styleguide"));
const ButtonsPage = lazy(() => import("../pages/Styleguide/Buttons"));
const ColorsPage = lazy(() => import("../pages/Styleguide/Colors"));
const IconsPage = lazy(() => import("../pages/Styleguide/Icons"));
const TypographyPage = lazy(() => import("../pages/Styleguide/Typography"));
const DividersPage = lazy(() => import("../pages/Styleguide/Dividers"));
const TagsPage = lazy(() => import("../pages/Styleguide/Tags"));
const DevPage = lazy(() => import("../pages/Dev/Dev"));
const ExamplesPage = lazy(() => import("../pages/Examples"));
const $3DPage = lazy(() => import("../pages/Examples/3D"));
const $2DPage = lazy(() => import("../pages/Examples/2D"));
const CssPage = lazy(() => import("../pages/Examples/CSS"));
const RESTPage = lazy(() => import("../pages/Examples/REST"));
const BrowserAPIsPage = lazy(() => import("../pages/Examples/BrowserAPIs"));

const withSuspense = (Component: React.LazyExoticComponent<() => JSX.Element>) => (
  <Suspense fallback={<div />}>
    <Component />
  </Suspense>
);

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to='/home' /> },
      { path: "home", element: withSuspense(HomePage) },
      { path: "skills", element: withSuspense(SkillsPage) },
      { path: "projects", element: withSuspense(ProjectsPage) },
      {
        path: "dev",
        element: withSuspense(DevPage),
        children: [
          { index: true, element: <Navigate to='/dev/examples' /> },
          {
            path: "styleguide",
            element: <DevOnly element={withSuspense(StyleguidePage)} />,
            children: [
              { index: true, element: <Navigate to='/dev/styleguide/buttons' /> },
              { path: "buttons", element: withSuspense(ButtonsPage) },
              { path: "colors", element: withSuspense(ColorsPage) },
              { path: "dividers", element: withSuspense(DividersPage) },
              { path: "icons", element: withSuspense(IconsPage) },
              { path: "tags", element: withSuspense(TagsPage) },
              { path: "typography", element: withSuspense(TypographyPage) },
            ],
          },
          {
            path: "examples",
            element: withSuspense(ExamplesPage),
            children: [
              { index: true, element: <Navigate to='/dev/examples/2d' /> },
              { path: "rest", element: <DevOnly element={withSuspense(RESTPage)} /> },
              { path: "browser", element: <DevOnly element={withSuspense(BrowserAPIsPage)} /> },
              { path: "css", element: withSuspense(CssPage) },
              { path: "2d", element: withSuspense($2DPage) },
              { path: "3d", element: withSuspense($3DPage) },
            ],
          },
        ],
      },
      { path: "contacts", element: withSuspense(ContactsPage) },
    ],
  },
];
