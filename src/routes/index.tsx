import ErrorPage from "../pages/Error";
import RootPage from "../pages/Root";

export const routes = [
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
  },
];
