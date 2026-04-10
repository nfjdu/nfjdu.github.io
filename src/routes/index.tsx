import { Navigate, RouteObject } from "react-router-dom";
import { lazy, Suspense } from "react";
import ErrorPage from "../pages/Error";
import RootPage from "../pages/Root";

// Lazy load pages
const HomePage = lazy(() => import("../pages/Home"));
const SkillsPage = lazy(() => import("../pages/Skills"));
const ProjectsPage = lazy(() => import("../pages/Projects"));
const ContactsPage = lazy(() => import("../pages/Contacts"));
const PlaygroundPage = lazy(() => import("../pages/Playground"));
const ExperimentLayout = lazy(() => import("../pages/Playground/ExperimentLayout"));

// Playground experiments
const TextScrambleEffect = lazy(() => import("../pages/Playground/experiments/TextScrambleEffect"));
const TypewriterEffect = lazy(() => import("../pages/Playground/experiments/TypewriterEffect"));
const GradientTextEffect = lazy(() => import("../pages/Playground/experiments/GradientTextEffect"));
const GlassmorphizmCube = lazy(() => import("../pages/Playground/experiments/GlassmorphizmCube"));
const CharsMadeOfChars = lazy(() => import("../pages/Playground/experiments/CharsMadeOfChars"));
const Iphone3DModel = lazy(() => import("../pages/Playground/experiments/Iphone3DModel"));

const withSuspense = (Component: React.LazyExoticComponent<React.ComponentType>) => (
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
      { path: "contacts", element: withSuspense(ContactsPage) },
      {
        path: "playground",
        children: [
          { index: true, element: withSuspense(PlaygroundPage) },
          {
            element: withSuspense(ExperimentLayout),
            children: [
              { path: "text-scramble", element: withSuspense(TextScrambleEffect) },
              { path: "typewriter", element: withSuspense(TypewriterEffect) },
              { path: "gradient-text", element: withSuspense(GradientTextEffect) },
              { path: "glassmorphism", element: withSuspense(GlassmorphizmCube) },
              { path: "ascii-art", element: withSuspense(CharsMadeOfChars) },
              { path: "iphone-3d", element: withSuspense(Iphone3DModel) },
            ],
          },
        ],
      },
    ],
  },
];
