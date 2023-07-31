// Importing necessary modules and components
import React from "react";
import useAuth from "../Custom-Hooks/useAuth";
import { Navigate } from "react-router-dom";

// A custom component for implementing protected routes
const ProtectedRoute = ({ children }) => {
  // Using the custom hook 'useAuth' to get the current user authentication status
  const { currentUser } = useAuth();

  // If the user is authenticated (currentUser exists), render the children components
  // Otherwise, redirect the user to the login page using the 'Navigate' component from React Router
  return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
