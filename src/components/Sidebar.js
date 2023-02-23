import React from "react";
import { Link } from "react-router-dom";
import {Typography} from "@mui/material"
import "./Sidebar.css";
import logo from '../assets/logo.jpg'
function Sidebar() {
  return (
    <div id="sidebar" className="d-flex flex-column p-3 text-white">
      <Link to="/" className="nav-link text-white">
        <div style={{ width: "60px", height: "60px", bgcolor: "red"}}>
          <img alt="profilelogo" style={{ width: "100%", borderRadius: "25px" }} src={logo}></img>
        </div>
        <Typography sx={{ lineHeight: "24px",fontWeight: "600", fontSize: "20px",pl:2 }}>
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
