import ErrorPage from "../pages/Error";
import HomePage from "../pages/Home";
import RootPage from "../pages/Root";
import StyleguidePage from "../pages/Styleguide";
import TypographyPage from "../pages/Styleguide/Typography";

export const routes = [
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { path: "home", element: <HomePage /> },
      {
        path: "styleguide",
        element: <StyleguidePage />,
        children: [{ path: "typography", element: <TypographyPage /> }],
      },
    ],
  },
];
