import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
  const isAuth = localStorage.getItem("token") ? true : false;

  return (
    <>
    <Routes>
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component />;
        } else {
          return (
            <Navigate
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
    </Routes>
    </>
  );
}

export default ProtectedRoute;
