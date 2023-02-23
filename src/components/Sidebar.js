import React from "react";
import { Link } from "react-router-dom";
import {Typography} from "@mui/material"
import "./Sidebar.css";

function Sidebar() {
  return (
    <div id="sidebar" className="d-flex flex-column p-3 text-white bg-success">
      <Link to="/" className="nav-link text-white">
        <div style={{ width: "50px", height: "50px", bgcolor: "red", marginLeft: "10px" }}>
          <img alt="profilelogo" style={{ width: "100%", borderRadius: "25px" }} ></img>
        </div>
        <Typography sx={{ lineHeight: "24px", ml: "20px", fontWeight: "600", fontSize: "24px", pt: "40px", pb: "40px" }}>
          Satguru technologies
        </Typography>
      </Link>
      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <Link to="/dashboard" className="nav-link text-white">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/employees" className="nav-link text-white">
            Employees
          </Link>
        </li>
        <li>
          <Link to="/tasks" className="nav-link text-white">
            Tasks
          </Link>
        </li>
        <li>
          <Link to="/ongoingprojects" className="nav-link text-white">
            OnGoing Projects
          </Link>
        </li>
        <li>
          <Link to="/logout" className="nav-link text-white">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
