import React, { useContext } from "react";
import { ourContext } from "../context/context";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { userDetails } = useContext(ourContext);

  if (userDetails === "") {
    return <Navigate to="/login" />;
  }
  return children;
};

export default RequireAuth;
