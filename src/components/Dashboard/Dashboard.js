import React, { useState, useEffect } from "react";
import axios from "axios";
import useAxiosInstance from "../../utils/useAxiosInstance";

import Sidebar from "../Sidebar";
import UserNav from "../UserNav";
import StatCard from "./StatCard";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Dashboard() {
  const [user, setUser] = useState("");
  // const server = useAxiosInstance();
  const [greet, setGreet] = useState("");
  useEffect(() => {
    const request = axios.CancelToken.source();
    setUser(localStorage.getItem("user"));
    var today = new Date();
    var curHr = today.getHours();
    if (curHr < 12) {
      setGreet("Good Morning");
    } else if (curHr < 16) {
      setGreet("Good Afternoon");
    } else {
      setGreet("Good Evening");
    }
    return () => {
      request.cancel();
    };
  }, []);

  return (
    <>
      <main className="d-flex m-0">
        <div className="container-fluid d-flex flex-column px-4">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            <Typography
              sx={{
                width: "100%",
                display: "flex",
                // justifyContent: "center",
                fontSize: "30px",
                fontWeight: 700,
                pt: 2,
              }}>
              {greet}
            </Typography>
            <Typography
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                fontSize: "20px",
                fontWeight: 400,
              }}>
              {user}
            </Typography>
            <Typography sx={{ width: "100%", minHeight: "100px", p: "20px", fontWeight: "500" }}>
              Notice: Here is to inform you that on March 8, there will be a full day off in occassion of the holiday of Holi.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}>
              <Card
                variant="outlined"
                sx={{
                  // border: "2px solid black",
                  width: "32%",
                }}>
                <CardContent>
                  <Typography sx={{ fontSize: 30, fontWeight: "600" }} color="text.secondary" gutterBottom>
                    Notifications
                  </Typography>
                  <Typography variant="h5" component="div"></Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "space-between",
                    }}>
                    {tasks.map((work) => (
                      <Card
                        variant="outlined"
                        sx={{
                          // bgcolor: "#1f6abf",
                          color: "#1f6abf",
                          border: "none",

                          mb: 2,
                        }}>
                        <CardContent>
                          <Typography
                            sx={{
                              fontSize: 14,
                              color: "#000000",
                            }}
                            color="text.secondary"
                            gutterBottom>
                            {work.title}
                          </Typography>
                          <ul>
                            {work.tasks.map((task) => (
                              <li>{task.name}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </Box>
                </CardContent>
              </Card>
              <Card
                variant="outlined"
                sx={{
                  // border: "2px solid black",
                  width: "32%",
                }}>
                <CardContent>
                  <Typography sx={{ fontSize: 30, fontWeight: "600" }} color="text.secondary" gutterBottom>
                    To do
                  </Typography>
                  <Typography variant="h5" component="div"></Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "space-between",
                    }}>
                    {tasks.map((work) => (
                      <Card
                        variant="outlined"
                        sx={{
                          // bgcolor: "",
                          border: "none",

                          color: "#1f6abf",
                          mb: 2,
                        }}>
                        <CardContent>
                          <Typography
                            sx={{
                              fontSize: 14,
                              color: "#000000",
                            }}
                            color="text.secondary"
                            gutterBottom>
                            {work.title}
                          </Typography>
                          <ul>
                            {work.tasks.map((task) => (
                              <li>{task.name}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </Box>
                </CardContent>
              </Card>
              <Card
                variant="outlined"
                sx={{
                  // border: "2px solid black",
                  width: "32%",
                }}>
                <CardContent>
                  <Typography sx={{ fontSize: 30, fontWeight: "600" }} color="text.secondary" gutterBottom>
                    Weekly Report
                  </Typography>
                  <Typography variant="h5" component="div"></Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "space-between",
                    }}>
                    {tasks.map((work) => (
                      <Card
                        variant="outlined"
                        sx={{
                          // bgcolor: "",
                          border: "none",
                          color: "#1f6abf",
                          mb: 2,
                        }}>
                        <CardContent>
                          <Typography
                            sx={{
                              fontSize: 14,
                              color: "#000000",
                            }}
                            color="text.secondary"
                            gutterBottom>
                            {work.title}
                          </Typography>
                          <ul>
                            {work.tasks.map((task) => (
                              <li>{task.name}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;

const tasks = [
  {
    title: "Gopher",
    status: "pending",
    tasks: [{ name: "Complete Setup" }, { name: "Complete Connections" }],
  },
  {
    title: "CRM",
    status: "pending",
    tasks: [{ name: "Complete Setup" }, { name: "Complete Connections" }],
  },
];
