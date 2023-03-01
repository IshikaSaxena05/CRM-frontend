import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";

function createData(Project_Name, Technology, Delivery, Type) {
  return { Project_Name, Technology, Delivery, Type };
}

const rows = [
  createData("Ball & Dogget", "PHP", "Jan 2023", "App & Web"),
  createData("School lunch", "PHP", "Dec 2022", "Web"),
  createData("Vformity", "Laravel & Flutter", "July 2022", "App & Web"),
  createData("Gopher", "React & Laravel", "Feb 2023", "Web"),
  createData("Lifestyle clinic", "Laravel", "Dec 2023", "Web"),
];

export default function ClosedProjectListing() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography sx={{ fontSize: "30px", fontWeight: "600", pt: 5, pb: 5 }}>Completed Projects List</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: "#1f6abf" }}>
              <TableCell sx={{ color: "white" }}>Project Name</TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                Technology
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                Delivery Date
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                Type
              </TableCell>
              {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.Project_Name} sx={{ "&:last-child td, &:last-child th": { border: 0 }, height: "120px" }}>
                <TableCell component="th" scope="row">
                  {row.Project_Name}
                </TableCell>
                <TableCell align="center">{row.Technology}</TableCell>

                <TableCell align="center">{row.Delivery}</TableCell>
                <TableCell align="center">{row.Type}</TableCell>
                {/* <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
