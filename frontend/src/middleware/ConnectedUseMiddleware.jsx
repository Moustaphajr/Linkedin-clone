import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ConnectedUserMiddleware = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? <Navigate to="/welcome" /> : <Outlet />;
};

export default ConnectedUserMiddleware;
