import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const email = "seyranmustafa4@gmail.com";
  const password = "1234";
  return email === "seyranmustafa4@gmail.com" && password === "1234" ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRouter;
