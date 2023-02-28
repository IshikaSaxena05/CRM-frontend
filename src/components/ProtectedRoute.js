import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import cogoToast from "cogo-toast";

const ProtectedRoute = ({ children }) => {
  const acc_Token = localStorage.getItem("user");
  if (acc_Token) {
  } else {
    setTimeout(() => {
      cogoToast.error("Please Log in first");
    }, 500);
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
