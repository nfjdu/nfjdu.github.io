import React from "react";
import { Navigate } from "react-router-dom";

export default function DevOnly({ element }: { element: React.ReactNode }) {
  return import.meta.env.MODE !== "development" ? element : <Navigate to='/home' />;
}
