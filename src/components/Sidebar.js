/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { drawerData } from "./Config/Mockdata";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Divider, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupsIcon from "@mui/icons-material/Groups";
import TaskIcon from "@mui/icons-material/Task";
import FormatListNumberedRtlIcon from "@mui/icons-material/FormatListNumberedRtl";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import cogoToast from "cogo-toast";
import logo from "../assets/logo.jpg";
import RoutesIndex from "../components/Routes";
let drawerWidth = 240;

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = React.useState(drawerData);
  const [user, setUser] = React.useState("");

  function onLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    cogoToast.success("Logout Successful. Please visit again.");
    navigate("/");
  }
  let URL = location.pathname;

  React.useEffect(() => {
    setUser(localStorage.getItem("user"));
    const trimmedURL = URL.slice(0, 6);
    data.map((item, index) => {
      let trimmedRoute = item.Routes.slice(0, 6);
      trimmedURL === trimmedRoute ? (item.isActive = true) : (item.isActive = false);
    });
    setData([...data]);
  }, [location.pathname]);

  const redirect = (redirect) => {
    if (redirect) {
      navigate(redirect);
      console.log(redirect);
    } else {
    }
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "100%" }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ bgcolor: "whitesmoke", display: "flex", alignItems: "flex-end", pt: "30px" }}>
          <nav className="nav navbar-light d-flex justify-content-between align-items-center py-2">
            <div className="dropdown">
              <section className="nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                {`Welcome, ${user} `}
              </section>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <button onClick={onLogout} className="dropdown-item">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </AppBar>

        <Drawer
          sx={{
            minWidth: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              bgcolor: "#1f6abf",
            },
            ml: "auto",
            mr: "auto",
          }}
          variant="permanent"
          anchor="left">
          <Box
            sx={{
              pt: 1,
              // p: 2,
              display: "flex",
            }}>
            <Link to="/" style={{ display: "flex", textDecoration: "none", padding: "10px" }}>
              <div style={{ width: "60px", height: "60px" }}>
                <img alt="profilelogo" style={{ width: "100%" }} src={logo}></img>
              </div>
              <Typography sx={{ lineHeight: "24px", fontWeight: "600", fontSize: "26px", pl: 2, color: "white" }}>
                Satguru technologies
              </Typography>
            </Link>
          </Box>
          <Divider />

          <List
            sx={{
              "& .MuiListItemButton-root:hover": {
                // bgcolor: "white",
                borderRadius: "5px",
                fontWeight: "400",

                "&, & .MuiListItemIcon-root": {
                  // color: "#3D2E57",
                  fontWeight: "400",
                  borderRadius: "5px",
                },
              },
              p: "8px",
            }}>
            {data.map((text, index) => (
              <ListItem
                sx={{
                  color: text.isActive ? "#000000" : "white",
                  bgcolor: text.isActive ? "white" : "",
                  borderRadius: "5px",
                  mt: "10px",
                }}
                key={index}
                disablePadding>
                <ListItemButton onClick={() => redirect(text.Routes)}>
                  <ListItemIcon
                    sx={{
                      color: text.isActive ? "#000000" : "white",
                      maxWidth: "22px",
                      minWidth: "22px",
                      mr: "30px",
                    }}>
                    {index === 0 ? (
                      <DashboardIcon sx={{ height: "3em", width: "2em" }} />
                    ) : index === 1 ? (
                      <GroupsIcon sx={{ height: "3em", width: "2em" }} />
                    ) : index === 2 ? (
                      <TaskIcon sx={{ height: "3em", width: "2em" }} />
                    ) : index === 3 ? (
                      <FormatListNumberedRtlIcon sx={{ height: "3em", width: "2em" }} />
                    ) : (
                      <PlaylistAddCheckIcon sx={{ height: "3em", width: "2em" }} />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      fontWeight: "700",
                      fontSize: "18px",
                      display: { xs: "none", sm: "flex" },
                    }}
                    primary={text.val}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            pt: "80px",
            // pb: "100px",
            pl: { xs: "8px", lg: "20px" },
            pr: { xs: "8px", lg: "20px" },
            ml: "auto",
            bgcolor: "white",
          }}>
          <Box
            sx={{
              pt: 2,
              pl: { xs: 1, lg: 3 },
              pr: { xs: 1, lg: 5 },
              borderRadius: 2,
            }}>
            <RoutesIndex />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Sidebar;
