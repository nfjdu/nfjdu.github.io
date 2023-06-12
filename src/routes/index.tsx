import ErrorPage from "../pages/Error";
import HomePage from "../pages/Home";
import RootPage from "../pages/Root";
import StyleguidePage from "../pages/Styleguide";
import ButtonsPage from "../pages/Styleguide/Buttons";
import ColorsPage from "../pages/Styleguide/Colors";
import IconsPage from "../pages/Styleguide/Icons";
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
        children: [
          { path: "colors", element: <ColorsPage /> },
          { path: "typography", element: <TypographyPage /> },
          { path: "buttons", element: <ButtonsPage /> },
          { path: "icons", element: <IconsPage /> },
          // { path: "inputs", element: <ButtonsPage /> },
          // { path: "spacing", element: <ButtonsPage /> },
        ],
      },
    ],
  },
];
