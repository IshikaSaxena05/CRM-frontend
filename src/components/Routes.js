import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Authentication/Login";
// import ForgetPassword from "./components/Authentication/ForgetPassword";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./NotFound/NotFound";
import { Box } from "@mui/system";
import Dashboard from "./Dashboard/Dashboard";
import Employees from "./Employees/EmployeesList";
import EmployeeDetail from "./Employees/EmployeeDetail";
import Tasks from "./Tasks/Tasks";
import AdminEmployeesList from "./Employees/AdminEmployeesList";
import AddEmployee from "./Employees/AddEmployee";
import ClosedProjectListing from "./ClosedProjects/ClosedProjectListing";
import OngoingProjectList from "./OngoingProjects.js/OngoingProjectList";
import ViewProject from "./ClosedProjects/ViewProject";

const RoutesIndex = (props) => {
  let token = localStorage.getItem("token");

  return (
    <>
      <Box sx={{ width: "100%", bgcolor: "white" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {localStorage.getItem("role") === "Admin" ? (
            <Route exact path="/employees" element={<AdminEmployeesList />} />
          ) : (
            <Route exact path="/employees" element={<Employees />} />
          )}
          <Route exact path="/employees/detail" element={<EmployeeDetail />} />
          <Route exact path="/tasks" element={<Tasks />} />
          <Route exact path="/employees/addnew" element={<AddEmployee />} />
          <Route exact path="/closedprojects/view" element={<ViewProject />} />
          <Route exact path="/closedprojects" element={<ClosedProjectListing />} />
          <Route exact path="/ongoingprojects" element={<OngoingProjectList />} />
        </Routes>
      </Box>
    </>
  );
};

export default RoutesIndex;
