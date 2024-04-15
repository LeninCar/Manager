import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Taskmanagementdashboard from "pages/Taskmanagementdashboard";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Taskmanagementdashboard /> },
    { path: "/login", element: <Home /> },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};

export default ProjectRoutes;
