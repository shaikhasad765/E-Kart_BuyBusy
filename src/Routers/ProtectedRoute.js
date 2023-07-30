import React from "react";
import  useAuth  from "../Custom-Hooks/useAuth";
import { Navigate } from "react-router-dom";

// import { Outlet } from "react-router-dom";

const ProtectedRoute = ({children}) => {
  const { currentUser } = useAuth();
  return currentUser ?children : <Navigate to="/login" />;
};

export default ProtectedRoute;
