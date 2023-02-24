import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Authentication/Login";
// import ForgetPassword from "./components/Authentication/ForgetPassword";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./NotFound/NotFound";
import { Box } from "@mui/system";
import Dashboard from './Dashboard/Dashboard'
import Employees from './Employees/EmployeesList'

const RoutesIndex = (props) => {
  let token = localStorage.getItem("token");

  return (
      <>
      <Box sx={{ width: "100%", bgcolor: 'white', }}>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route exact path="/employees" element={<Employees />} />
        </Routes>
      </Box>
    </>
  );
};

export default RoutesIndex;
